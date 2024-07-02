import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Players } from './players.js';
import { Games } from './games.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
// create a server that will be handled by express
const server = http.createServer(app);
// create a server with sockects from node http server
const io = new Server(server);
const log = false;

io.on('connection', (socket) => {
    
    let player;
    let partner;
    let roomId;

    socket.on('newPlayer', (name, avatar) => {
        
        player = Players.addPlayer(uuidv4(), name, avatar);
        
        printLog(`newPlayer ${player.name} id ${player.id}`);
        
        socket.emit('player_created', true); 
        joinOwnRoom();

        // inform about the total amount of users connected
        socket.broadcast.emit('users_connected', Players.totalPlayers());
        socket.emit('users_connected', Players.totalPlayers());  

        // inform about the total amount of users free
        emitTotalFreePlayers();  
    });

    socket.on('find_match', () => {
        if (!!player?.id && !partner){
            // find a free player to play
            partner = Players.getRandomFreePlayer(player.id);
            
            if (!!partner){
                socket.leave(roomId);

                printLog(`player ${player.name} LEFT the own room ${roomId}`);
                
                // join a room with a free partner
                socket.join(partner.id);
                roomId = partner.id;

                printLog(`player ${player.name} JOIN the room ${roomId}`);
                
                // set both players playing
                Players.setPlayerPlaying(partner.id);
                Players.setPlayerPlaying(player.id);

                emitTotalFreePlayers();

                Games.addGame(roomId, player, partner);

                // emit events to the players in the room to update their partners
                socket.emit('match_partner', partner?.name, partner?.avatar);
                socket.to(roomId).emit('match_partner', player.name, player.avatar);

                printLog(`emitting partner ${player.name} to room ${roomId}`);
            
            }else {
                socket.emit('no_partner_found');
                // there's no one free, creates a room
                joinOwnRoom();
            }
        }
    });

    socket.on('leave_room', () => {
        leaveRoom({emitEvents : true});
    });

    socket.on('leave_room_due_partner', () => {
        leaveRoom({emitEvents : false});
    });

    socket.on('get_total_free_players', () => {
        emitTotalFreePlayers();
    });

    socket.on('player_ready', () => {
        const playerGame = Games.getGame(roomId);
        if (!!playerGame){
            const currentPlayer = playerGame.getPlayer(player.id);
            if (!!currentPlayer){
                currentPlayer.ready = true;
                socket.to(roomId).emit('partner_ready');
                socket.emit('player_ready');
            }

            if (!!playerGame.player1.ready && !!playerGame.player2.ready){
                setQuestions(playerGame);
            }
        }
    });

    socket.on('get_response', () => {

    });

    socket.on("disconnect", () => {
        if (!!player?.id){
            Players.removePlayer(player.id);
            
            // leave the room
            socket.leave(roomId);

            // not playing anymore
            Games.deleteGame(roomId);
            
            printLog(`disconnect: player ${player.name} left room ${roomId}`);

            // inform the room members about the disconnection so they will leave the room as well
            io.to(roomId).emit('partner_disconnected');

            // inform about the total amount of users currently connected
            socket.broadcast.emit('users_connected', Players.totalPlayers());
            
            player = null;
            partner = null;
            roomId = null;
        }
    });

    function joinOwnRoom(){
        if (!!player?.id && !partner){
            printLog(`player ${player.name} join own room ${player.id}`);

            // join own room
            socket.join(player.id);
            roomId = player.id;
        }
    }

    function emitTotalFreePlayers(){
        if (!!player?.id){
            const playersFree = Players.totalFreePlayers(player.id);
            socket.broadcast.emit('users_free', playersFree);
            socket.emit('users_free', playersFree);  
        }
    }

    function leaveRoom({emitEvents}){
        if (!!player?.id){
            partner = null;

            // leave the room
            socket.leave(roomId);
            
            Games.deleteGame(roomId);
            
            printLog(`leave: player ${player.name} left room ${roomId}`);
            
            // set the player free
            Players.setPlayerFree(player.id);
            // assign a new identificator to join its own room
            player.id = uuidv4();
                        
            if (!!emitEvents){
                socket.to(roomId).emit('partner_disconnected');
                socket.emit('room_left');
            }
            
            joinOwnRoom();
        }
    }

    async function setQuestions(playerGame){
        if (!playerGame.questions){
            await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(data => {
                playerGame.setGameQuestions(data); 
                emitQuestions(playerGame.questions);
            })
            .catch(err => console.log(err));
        }else{
            emitQuestions(playerGame.questions);
        }
    }

    function emitQuestions(questions){
        // remove correct/incorrect answers and keep all of them in one array so the client cannot distinguish them
        const questionsClients = questions.map(q => {
            let temp = {...q};
            delete temp.correctAnswer;
            delete temp.incorrectAnswers;
            return temp;
        });
        socket.to(roomId).emit('game_data', questionsClients);
        socket.emit('game_data', questionsClients);
    }
});

function printLog(message){
    if (log){
        console.log(message);
    }
}

server.listen(4000);
console.log('listening on port', 4000);
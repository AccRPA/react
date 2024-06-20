import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Players } from './players.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
// create a server that will be handled by express
const server = http.createServer(app);
// create a server with sockects from node http server
const io = new Server(server);

io.on('connection', (socket) => {
    
    let playerId;
    let roomId;

    socket.on('newPlayer', (name, avatar) => {
        playerId = uuidv4();
        Players.addPlayer(playerId, name, avatar);

        // inform about the total amount of users connected
        socket.broadcast.emit('users_connected', Players.totalPlayers());
        socket.emit('users_connected', Players.totalPlayers());
        
        // find a free player to play
        const partner = Players.getRandomFreePlayer(playerId);
        if (!!partner){
            // join a room with a free partner
            socket.join(partner.id);
            roomId = partner.id;
            
            // set both players playing
            Players.setPlayerPlaying(partner.id);
            Players.setPlayerPlaying(playerId);
            
            // emit events to the players in the room to update their partners
            socket.emit('match_partner', partner?.name, partner?.avatar);
            socket.to(roomId).emit('match_partner', name, avatar);
        }else{
            // there's no one free, creates a room
            joinOwnRoom();
        }
    })

    socket.on('leave_room', () => {
        // leave the room
        socket.leave(roomId);

        joinOwnRoom();

        // set the player free
        Players.setPlayerFree(playerId);
    });

    socket.on("disconnect", () => {
        Players.removePlayer(playerId);
        
        // leave the room
        socket.leave(roomId);
        
        // inform the room members about the disconnection so they will leave the room as well
        io.to(roomId).emit('partner_disconnected');

        // inform about the total amount of users currently connected
        socket.broadcast.emit('users_connected', Players.totalPlayers());
        
        playerId = null;
        roomId = null;
    });

    function joinOwnRoom(){
        // join own room
        socket.join(playerId);
        roomId = playerId;
    }
});

server.listen(4000);
console.log('listening on port', 4000);
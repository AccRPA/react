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
            
            // set both players playing
            Players.setPlayerPlaying(partner.id);
            Players.setPlayerPlaying(playerId);
            
            // emit events to the players in the room to update their partners
            socket.emit('match_partner', partner?.name);
            socket.to(partner.id).emit('match_partner', name);
        }else{
            // there's no one free, creates a room
            socket.join(playerId);
        }
    })

    socket.on("disconnect", () => {
        // if the user is in a room, inform the other members the disconnection, and set them free
        Players.removePlayer(playerId);

        // inform the room members about the disconnection
        socket.room.emit('disconnect', playerId);

        // informa about the total amount of users currently connected
        socket.broadcast.emit('users_connected', Players.totalPlayers());
        
    });
});

server.listen(4000);
console.log('listening on port', 4000);
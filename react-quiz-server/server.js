import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Players } from './players.js';

const app = express();
// create a server that will be handled by express
const server = http.createServer(app);
// create a server with sockects from node http server
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('client connected');

    let playerId;
    socket.on('newPlayer', (data) => {
        playerId = data[0];
        const [name, avatar] = data;
        Players.addPlayer(playerId, name, avatar);
    })

    socket.on("disconnect", (reason) => {
        console.log(`disconnect reason:  ${reason}`);
        Players.removePlayer(playerId);
    });
    
    socket.on('match', (data) => {
        console.log(data);
    });
});

server.listen(4000);
console.log('listening on port', 4000);
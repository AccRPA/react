import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
// create a server that will be handled by express
const server = http.createServer(app);
// create a server with sockects from node http server
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('client connected');
    socket.on('match', (data) => {
        console.log(data);
    });
});
io.on('disconnection', (socket) => console.log('client disconnected') );

server.listen(4000);
console.log('listening on port', 4000);
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });

    socket.on('message', (data) => {
        console.log('Received message:', data);
        io.emit('message', data);
    });
});

const port = 3002;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

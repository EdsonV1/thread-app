const express = require("express");
const https = require("https");
const socket_io = require("socket.io");

const PORT = process.env.PORT || 8080


const app = express();
const server = https.createServer(app)
const io = socket_io(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on('connection', (socket) => {
    console.log("A user connected");

    socket.on("chat message:", (msg) => {
        console.log('Message:', msg);

        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log('Server running on port 3000');
});
import express from "express";
import https from "https";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const PORT = 4000

import "./config/mongo.js"


const app = express();
const server = https.createServer(app)

const io = new Server(server, {
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
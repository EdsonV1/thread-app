import express from "express";
import http from "http"; // Change from https to http
import bodyParser from "body-parser";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const PORT = 4000;

import "./config/mongo.js";
import userRoutes from "./routes/user.js";

const app = express();
const server = http.createServer(app); // Changed to http.createServer

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/backend', userRoutes);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => { // Removed the extra colon in "chat message:"
        console.log('Message:', msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Corrected the port variable in the log message
});

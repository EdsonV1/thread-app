import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "../.env" });


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
});

mongoose.connection.on("connected", () => {
    console.log("Mongo has connected successfully");
});

mongoose.connection.on("reconnected", () => {
    console.log("Mongo has reconnected");
});

mongoose.connection.on("error", (error) => {
    console.log("Mongo connection has an error", error);
    mongoose.disconnect();
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongo connection is disconnected");
});
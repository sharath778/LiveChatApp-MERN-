import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authMiddleWare from "./routers/auth.route.js";
import usersSideBar from "./routers/user.route.js";
import messageMiddleWare from "./routers/message.route.js";

import connectToMongoDb from "./mongoDB/mongoConnection.js";
import { app, server } from "./socket/socket.js";

//const app = express();

dotenv.config();

app.use(cookieParser());

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());


app.use("/api/auth", authMiddleWare);
app.use("/api/message", messageMiddleWare);
app.use("/api/users", usersSideBar);

app.use(express.static(path.join(__dirname, "/frondend/dist")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frondend", "dist", "index.html"));
});

server.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`Running in ${PORT}`)
});
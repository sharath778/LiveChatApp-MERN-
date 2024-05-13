import { Router } from "express";
import { sendMessage, getMessages } from "../controllers/sendMessage.controller.js";
import protectRouter from "../middleWare/protectRouter.js";

const route = Router();

route.post("/send/:id", protectRouter,sendMessage);
route.get("/get/:id", protectRouter,getMessages);
export default route;
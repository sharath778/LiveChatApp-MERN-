import { Router } from "express";
import protectRouter from "../middleWare/protectRouter.js";
import { getUsers } from "../controllers/users.controller.js";

const route = Router();

route.get("/", protectRouter, getUsers);

export default route;
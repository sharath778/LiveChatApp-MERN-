import { Router } from "express";
import { login, logout, signUp } from "../controllers/auth.contoller.js";

const router = Router();

router.post("/signUp", signUp);

router.post("/login", login);

router.post("/logout", logout);

export default router;
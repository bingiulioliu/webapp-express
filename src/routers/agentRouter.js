import express from "express";
import { chat } from "../controllers/agentController.js";

const agentRouter = express.Router();

agentRouter.post('/chat', chat);

export default agentRouter;
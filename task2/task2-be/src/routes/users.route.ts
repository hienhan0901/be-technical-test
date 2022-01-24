import express, { Request, Response } from "express";
import { queryUsers, updateUsers } from "../controllers/users.controller";
import { authMiddleware } from "../middlewares/auth.mdw";

const router = express.Router();

router
  .get("/", authMiddleware, queryUsers)
  .post("/", authMiddleware, updateUsers);

export default router;

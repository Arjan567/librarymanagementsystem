import express from "express";

import { createUserHandler } from "../controller/user.controller.js";

const router = express.Router();

router.post("/api/users/", createUserHandler);

export default router;
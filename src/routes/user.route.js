import express from "express";

import { createUserHandler, loginUserHandler, logoutHandler, refreshTokenHandler } from "../controller/user.controller.js";
import { adminOnly, privateRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/users/", createUserHandler);
router.post("/api/users/login", loginUserHandler);
router.post("/api/users/refresh", refreshTokenHandler);
router.post("/api/users/logout", privateRoute, logoutHandler);


router.get("/api/users/me", privateRoute, adminOnly, (req,res) => {
    res.send("Private Route")
})

export default router;
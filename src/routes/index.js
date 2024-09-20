import express from "express";

import users from "./user.route.js";
import root from "./default.route.js";

const router = express.Router();

router.use(users);
router.use(root);

export default router;
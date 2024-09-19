import express from "express";

import root from "./default.route.js";

const router = express.Router();

router.use(root);

export default router;
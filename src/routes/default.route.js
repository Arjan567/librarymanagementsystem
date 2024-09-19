import express from "express";

import { rootHandler, notFound } from "../controller/root.controller.js";

const router = express.Router();

router.get("/", rootHandler);
router.get("*", notFound);

export default router;
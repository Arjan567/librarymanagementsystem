import express from "express";

import users from "./user.route.js";
import root from "./default.route.js";
import books from "./books.route.js";

const router = express.Router();

router.use(users);
router.use(root);
router.use(books);

export default router;
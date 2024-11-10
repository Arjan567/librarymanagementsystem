import express from "express";
import { createBookHandler, deleteBookById, getAllBooksHandler, getBookById } from "../controller/books.controller.js";
import { adminOnly, privateRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/books/", privateRoute, adminOnly, createBookHandler);
router.get("/api/books/", getAllBooksHandler);
router.get("/api/books/filter/:id", getBookById);
router.delete("/api/books/:id", privateRoute, adminOnly, deleteBookById);

export default router;
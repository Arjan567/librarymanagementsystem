/**
 * The default error handling middleware for Express
 *
 * @param {Error} err The error object
 * @param {import('express').Request} req The Express request object
 * @param {import('express').Response} res The Express response object
 * @param {import('express').NextFunction} next The next middleware function in the Express chain
 *
 * @returns {void}
 */

import vine from "@vinejs/vine";

import { catchAsyncError } from "../middleware/async.error.js";

import { createBookSchema } from "../schema/book.schema.js";

import { createBook, getBookFromId, deleteBook, getAllBooks } from "../service/book.service.js";

export const createBookHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const validator = vine.compile(createBookSchema);
  const payload = await validator.validate(body);

  const book = await createBook(payload);

  res.status(200).json({
    success: true,
    book,
  });
});


export const getAllBooksHandler = catchAsyncError(async (req, res, next) => {
  
  const books = await getAllBooks();

  res.status(200).json({
    success: true,
    books
  })

})

export const getBookById = catchAsyncError(async (req, res, next) => {
  
  const book = await getBookFromId(req.params.id);      

  res.status(200).json({
    success: true,
    book  
  })

})

export const deleteBookById = catchAsyncError(async (req, res, next) => {
  
  await deleteBook(req.params.id); 

  res.status(200).json({
    success: true,
    message: "Book Deleted Successfully!"
  })

})
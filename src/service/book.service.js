import prisma from "../db/db.config.js";

export function createBook(input) {
  return prisma.book.create({ data: input });
}

export function deleteBook(input) {
  return prisma.book.delete({ where: { id: input } });
}
export function getAllBooks() {
  return prisma.book.findMany();
}

export function getBookFromId(input) {
  return prisma.book.findUnique({ where: { id: input } });
}
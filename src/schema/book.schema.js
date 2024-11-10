import vine from "@vinejs/vine";
import { validationErrorRepoter } from "../utils/errorRepoter.js";

vine.errorReporter = () => new validationErrorRepoter();

export const createBookSchema = vine.object({
    name: vine.string().minLength(2),
    author: vine.string().minLength(2),
    bookImg: vine.string().minLength(2),
})
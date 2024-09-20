import { errorHandler } from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/async.error.js";

export const createUserHandler = catchAsyncError(async (req, res, next) => {
    return next(new errorHandler("Someting Went Wrong!", 500));
})
import vine from "@vinejs/vine";
import bcrypt from "bcryptjs";

import { errorHandler } from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/async.error.js";

import { registerSchema } from "../schema/auth.schema.js";
import { createUser, findUserByEmail } from "../service/user.service.js";

export const createUserHandler = catchAsyncError(async (req, res, next) => {

    //data validation
    const body = req.body;

    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(body);

    const existingUser = await findUserByEmail(payload.email);

    if(existingUser) {
        return next(new errorHandler("Email is in use, Please login insted!", 422));
    }

    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    const user = await createUser(payload);

    return res.json({ 
        status: 200,
        message: "User Created Successfullt",
        user
     });

})
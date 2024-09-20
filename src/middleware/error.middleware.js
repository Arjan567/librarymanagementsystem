import logger from "../utils/logger.js";

export function errorMiddleware(err, req, res, next) {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    logger.error(`${err.message}`);

    if (err.code === 'P2002') {
        logger.error('There is a unique constraint violation, a new user cannot be created with this email');
    }

    if (err.code === 'P1000') {
        logger.error(`Can't reach database server. Please make sure your database server is running`);
    }

    if (err.code === 'P1013') {
        logger.error("The provided database string is invalid.");
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });

}
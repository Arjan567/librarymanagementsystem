export class errorHandler extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}
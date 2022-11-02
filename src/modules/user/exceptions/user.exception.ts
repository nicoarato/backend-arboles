import { HttpException, HttpStatus } from '@nestjs/common';

export class UserException extends HttpException {
    constructor(
        objectOrError: object | string,
        description?: string,
        statusCode?: HttpStatus,
    ) {
        super(
            HttpException.createBody(objectOrError, description, statusCode),
            statusCode,
        );
    }
}

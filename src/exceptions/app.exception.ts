import { HttpException } from '@nestjs/common';
import { ErrorHttpStatusCode } from '@nestjs/common/utils/http-error-by-code.util';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

export class AppException extends HttpException {
    constructor(message: string, code: HttpStatus) {
        super(message, code);
    }
}

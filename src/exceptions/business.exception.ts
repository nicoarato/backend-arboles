import { AppException } from './app.exception';
import { HttpStatus } from '@nestjs/common';

export class BusinessException extends AppException {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST);
    }
}

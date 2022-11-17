import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { isArray, isObject } from 'class-validator';
import { ResponseDto } from '../models/response.dto';
import { AppException } from '../exceptions/app.exception';
@Catch()
export class AppExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let returns: ResponseDto;
        Logger.debug(exception, 'Exception');
        if (exception instanceof AppException) {
            returns = {
                statusCode: exception.getStatus(),
                message: exception.message,
                // result: {
                //     errors: exception.errors,
                //     warnings: exception.warnings,
                //     completed: false,
                // },
            };
        } else if (exception instanceof HttpException) {
            returns = {
                statusCode: exception.getStatus(),
                message: exception.message,
            };
            if (typeof exception.getResponse() !== 'string') {
                const response = exception.getResponse() as {
                    message: string[];
                    error: string;
                    errors?: any[];
                    warnings?: any[];
                };
                if (response.errors) {
                    returns['errors'] = response.errors;
                } else if (isArray(response.message)) {
                    returns['errors'] = response.message;
                }
                if (response.warnings) {
                    returns['warnings'] = response.warnings;
                }
                if (response.error) {
                    returns.message = response.error;
                }
            }
        } else if (exception instanceof InternalServerErrorException) {
            Logger.error(exception, 'InternalServerErrorException');
            returns = {
                statusCode: 500,
                message: exception.message,
            };
        } else {
            returns = {
                statusCode: 500,
                message: exception.toString(),
            };
        }
        response.status(returns.statusCode).send(returns);
    }
}

import {
    BadGatewayException,
    CallHandler,
    ExecutionContext,
    Injectable,
    InternalServerErrorException,
    NestInterceptor,
    SetMetadata,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseDto } from '../models/response.dto';
import { Reflector } from '@nestjs/core';

export const noTransformKey = 'NoTransform';
export const NoTransform = () => SetMetadata(noTransformKey, true);

@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, ResponseDto<T>>
{
    constructor(private reflector: Reflector) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<ResponseDto<T>> {
        const isNoTransform = this.reflector.getAllAndOverride<boolean>(
            noTransformKey,
            [context.getHandler(), context.getClass()],
        );

        return next.handle().pipe(
            map((data) => {
                if (isNoTransform) {
                    return data;
                }
                return { result: data, statusCode: 200 };
            }),
        );
    }
}

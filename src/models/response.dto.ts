export class ResponseDto<T = any> {
    statusCode: number;
    message?: string;
    result?: T;
    errors?: string | object;
}

import { ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

export const allowAnonKey = 'AllowAnon';
export const AllowAnon = () => SetMetadata(allowAnonKey, true);
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isAllowAnon = this.reflector.getAllAndOverride<boolean>(
            allowAnonKey,
            [context.getHandler(), context.getClass()],
        );
        if (isAllowAnon) {
            return true;
        }
        return super.canActivate(context);
    }
}

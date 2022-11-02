import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get('SECRET'),
                };
            },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [
        JwtStrategy,
        {
            provide: APP_GUARD,
            useExisting: JwtAuthGuard,
        },
        JwtAuthGuard,
    ],
})
export class AuthModule {}

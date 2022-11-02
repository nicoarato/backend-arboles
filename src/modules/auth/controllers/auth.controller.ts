import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../../user/services/user.service';
import { User } from '../../user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../user/dto/user.dto';
import { AllowAnon } from '../jwt-auth.guard';

@Controller()
export class AuthController {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    @Post('login')
    @AllowAnon()
    async login(
        @Body() login: { username: string; password: string },
    ): Promise<{ user: UserDto; access_token: string }> {
        const user = await this.usersService.validateUser(
            login.username,
            login.password,
        );
        if (user) {
            const payload = { username: user.username, sub: user.id };
            return {
                user,
                access_token: this.jwtService.sign(payload),
            };
        } else {
            throw new UnauthorizedException();
        }
    }
}

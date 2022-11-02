import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';

import { User } from '../../auth/user.decorator';
import { AllowAnon, JwtAuthGuard } from '../../auth/jwt-auth.guard';
@Controller()
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this.usersService.create(createUserDto);
    }

    @Get('info')
    info(@User() user: UserDto): UserDto {
        return user;
    }

    // @Get()
    // findAll(): Promise<User[]> {
    //     return this.usersService.findAll();
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string): Promise<User> {
    //     return this.usersService.findOne(id);
    // }
    //
    // @Delete(':id')
    // remove(@Param('id') id: string): Promise<void> {
    //     return this.usersService.remove(id);
    // }
}

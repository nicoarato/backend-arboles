import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';

import { User } from '../../auth/user.decorator';
import { AllowAnon, JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('User Module')
@Controller()
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this.usersService.create(createUserDto);
    }

    @ApiExcludeEndpoint()
    @Get('info')
    info(@User() user: UserDto): UserDto {
        return user;
    }

    @Patch()
    update(@Param('id') id: number): Promise<any> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<any> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}

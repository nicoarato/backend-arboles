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
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from '../../auth/user.decorator';
import { AllowAnon, JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderByCondition } from 'typeorm';

@ApiTags('User Module')
@Controller()
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOperation({ summary: 'Crea un nuevo usuario' })
    create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this.usersService.create(createUserDto);
    }

    @ApiExcludeEndpoint()
    @Get('info')
    info(@User() user: UserDto): UserDto {
        return user;
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualiza los datos de un usuario por su ID' })
    update(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<any> {
        return this.usersService.update(id, updateUserDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Devuelve un usuario por su ID' })
    findOne(@Param('id') id: number): Promise<any> {
        return this.usersService.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: 'Devuelve la lista de usuarios' })
    findAll(): Promise<any> {
        return this.usersService.findAll();
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina un usuario por su ID' })
    delete(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}

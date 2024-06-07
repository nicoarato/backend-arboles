import { UpdateUserDto } from './../controllers/dto/update-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../controllers/dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { UserException } from '../exceptions/user.exception';
import { Rol } from '../entity/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Rol) private rolesRepository: Repository<Rol>,
        private configSvc: ConfigService,
    ) {}

    async validateUser(username: string, password: string): Promise<UserDto> {
        const user = await this.usersRepository.findOne({
            withDeleted: false,
            where: {
                username: username,
                password: this.hashPassword(password),
            },
            relations: ['rol'],
        });
        if (user) {
            return UserDto.fromModel(user);
        } else {
            return null;
        }
    }

    private hashPassword(password: string) {
        return bcrypt.hashSync(password, this.configSvc.get('SALT'));
    }

    async create(createUserDto: CreateUserDto): Promise<UserDto> {
        try {
            if (
                await this.usersRepository.findOne({
                    where: {
                        username: createUserDto.username,
                    },
                })
            ) {
                throw new UserException(
                    `Una propiedad username está duplicada ${createUserDto.username}`,
                    'El nombre de usuario ya está en uso',
                    409,
                );
            }
            console.log('DATOS recibidos: ', createUserDto);
            const user = new User();
            user.name = createUserDto.name;
            user.email = createUserDto.email;
            user.username = createUserDto.username;
            user.lastname = createUserDto.lastname;
            user.address = createUserDto.address;
            user.city = createUserDto.city;
            user.state = createUserDto.state;
            user.password = this.hashPassword(createUserDto.password);
            user.rol = await this.rolesRepository.findOneBy({
                id: createUserDto.rol,
            });
            await this.usersRepository.save(user);
            return UserDto.fromModel(user);
        } catch (e) {
            if (e instanceof UserException) {
                throw e;
            } else {
                throw new UserException(createUserDto, 'Error inesperado');
            }
        }
    }

    async findAll(): Promise<User[]> {
        const users = await this.usersRepository.find({
            order: { lastname: 'ASC' },
            where: { deleted: false },
        });
        return users;
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({
            where: { id },
            relations: ['rol'],
        });
    }

    async softDeleteUser(id: number): Promise<void> {
        const user = await this.usersRepository.findOne({
            where: { id },
            relations: ['rol'],
        });
        if (user) {
            user.deleted = true;
            user.deletedAt = new Date().toISOString();
            await this.usersRepository.save(user);
        }
    }

    async remove(id: number): Promise<void> {
        return await this.softDeleteUser(id);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const { name, lastname, password, email, address, city, state } =
            updateUserDto;
        const userToUpdate = {};

        if (name !== null && name !== undefined) {
            userToUpdate['name'] = name;
        }

        if (lastname !== null && lastname !== undefined) {
            userToUpdate['lastname'] = lastname;
        }

        if (password !== null && password !== undefined) {
            userToUpdate['password'] = this.hashPassword(password);
        }

        if (email !== null && email !== undefined) {
            userToUpdate['email'] = email;
        }

        if (address !== null && address !== undefined) {
            userToUpdate['address'] = address;
        }

        if (city !== null && city !== undefined) {
            userToUpdate['city'] = city;
        }

        if (state !== null && state !== undefined) {
            userToUpdate['state'] = state;
        }

        userToUpdate['updatedAt'] = new Date();

        const user = await this.usersRepository.preload({
            id,
            ...userToUpdate,
        });
        if (!user) throw new NotFoundException(`User ${id} not found.`);

        console.log(userToUpdate);
        return this.usersRepository.save(user);
    }
}

import { Injectable } from '@nestjs/common';
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
                    createUserDto.username,
                    'El nombre de usuario ya está en uso',
                );
            }

            const user = new User();
            user.name = createUserDto.name;
            user.username = createUserDto.username;
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
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({
            where: { id },
            relations: ['rol'],
        });
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await this.usersRepository.softRemove(user);
    }
}

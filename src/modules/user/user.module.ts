import { Module } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './services/user.service';
import { UsersController } from './controllers/user.controller';
import { Rol } from './entity/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User, Rol])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UserModule {}

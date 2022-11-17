import { Module } from '@nestjs/common';
import { ArbolController } from './controllers/arbol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../user/services/user.service';
import { Arbol } from './entities/arbol.entity';
import { UserModule } from '../user/user.module';
import { ArbolService } from './services/arbol.service';
import { ProyectoModule } from '../proyecto/proyecto.module';

@Module({
    imports: [TypeOrmModule.forFeature([Arbol]), UserModule, ProyectoModule],
    controllers: [ArbolController],
    providers: [ArbolService],
})
export class ArbolModule {}

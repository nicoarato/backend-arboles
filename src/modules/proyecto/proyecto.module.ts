import { Module } from '@nestjs/common';
import { ProyectoController } from './controllers/proyecto.controller';
import { ProyectoService } from './services/proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { UsersService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Proyecto]), UserModule],
    controllers: [ProyectoController],
    providers: [ProyectoService],
    exports: [TypeOrmModule.forFeature([Proyecto]), ProyectoService],
})
export class ProyectoModule {}

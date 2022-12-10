import { Body, Controller, Post } from '@nestjs/common';
import { AllowAnon } from '../../auth/jwt-auth.guard';
import { CreateArbolDto } from './dtos/create-arbol.dto.ts/create-arbol.dto';
import { ArbolService } from '../services/arbol.service';
import { Observable } from 'rxjs';
import { ArbolDto } from '../dtos/arbol.dto';

@Controller('')
export class ArbolController {
    constructor(private readonly arbolService: ArbolService) {}
    @Post()
    create(@Body() createArbolDto: CreateArbolDto): Observable<ArbolDto> {
        return this.arbolService.create(createArbolDto);
    }
}

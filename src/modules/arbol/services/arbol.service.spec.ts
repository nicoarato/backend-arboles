import { Test, TestingModule } from '@nestjs/testing';
import { ArbolService } from './arbol.service';

describe('ArbolService', () => {
    let service: ArbolService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ArbolService],
        }).compile();

        service = module.get<ArbolService>(ArbolService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Res,
    StreamableFile,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { AllowAnon } from '../../auth/jwt-auth.guard';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileService } from '../services/file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { NoTransform } from '../../../interceptors/transform.interceptor';
import { createReadStream } from 'fs';
import { doc } from 'prettier';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { map, Observable } from 'rxjs';
import type { Response } from 'express';
@ApiTags('File Module')
@Controller('')
export class FileController {
    constructor(
        private fileService: FileService,
        private configSvc: ConfigService,
    ) {}

    @Post('upload')
    @AllowAnon()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.fileService.createFile(file);
    }

    @Get(':id')
    @AllowAnon()
    @NoTransform()
    getFile(
        @Param('id', ParseIntPipe) fileId: number,
        @Res({ passthrough: true }) res: Response,
    ): Observable<StreamableFile> {
        return this.fileService.findOneWithFilename(fileId).pipe(
            map((fileWithFilename) => {
                const file = createReadStream(
                    join(
                        process.cwd(),
                        this.configSvc.get('FILES_LOCATION'),
                        fileWithFilename.filename,
                    ),
                );
                res.set({
                    'Content-Type': fileWithFilename.file.mimetype,
                    'Content-Disposition': `inline; filename="${fileWithFilename.file.nombre}"`,
                });
                return new StreamableFile(file);
            }),
        );
    }
    // create(): void {}
}

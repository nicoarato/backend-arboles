import { User } from '../entity/user.entity';
import { RolDto } from './rol.dto';

export class UserDto {
    constructor(
        public id: number,
        public username: string,
        public nombre: string,
        public rol?: RolDto,
    ) {}

    public static fromModel(model: User) {
        return new UserDto(
            model.id,
            model.username,
            model.name,
            model.rol ? RolDto.fromModel(model.rol) : undefined,
        );
    }
}

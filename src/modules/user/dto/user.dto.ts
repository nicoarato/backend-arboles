import { User } from '../entity/user.entity';
import { RolDto } from './rol.dto';

export class UserDto {
    constructor(
        public id: number,
        public username: string,
        public name: string,
        public lastname: string,
        public email: string,
        public address: string,
        public city: string,
        public state: string,
        public rol?: RolDto,
    ) {}

    public static fromModel(model: User) {
        return new UserDto(
            model.id,
            model.username,
            model.name,
            model.lastname,
            model.email,
            model.address,
            model.city,
            model.state,
            model.rol ? RolDto.fromModel(model.rol) : undefined,
        );
    }
}

import { Rol } from '../entity/rol.entity';

export class RolDto {
    constructor(public id: number, public description: string) {}

    public static fromModel(model: Rol): RolDto {
        return new RolDto(model.id, model.description);
    }
}

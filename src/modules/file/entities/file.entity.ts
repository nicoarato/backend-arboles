import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';
import { Arbol } from '../../arbol/entities/arbol.entity';

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    mimetype: string;

    @Column()
    filename: string;

    @Column()
    size: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne((type) => Arbol, {
        nullable: true,
        lazy: true,
    })
    @JoinColumn({ name: 'arbol_id' })
    arbol: Arbol;
}

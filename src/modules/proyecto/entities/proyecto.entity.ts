import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { Arbol } from '../../arbol/entities/arbol.entity';

@Entity()
export class Proyecto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    localidad: string;

    @Column({ nullable: true })
    provincia: string;

    @Column({ name: 'tiempo_estimado', nullable: true })
    tiempoEstimado: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;

    @ManyToMany(() => User)
    @JoinTable({
        name: 'user_proyecto',
        joinColumn: { name: 'proyecto_id' },
        inverseJoinColumn: { name: 'user_id' },
    })
    usuarios: User[];

    @OneToMany(() => Arbol, (arbol) => arbol.proyecto)
    arboles: Arbol[];
}

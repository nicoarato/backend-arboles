import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Rol } from './rol.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    lastname: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ select: false })
    password: string;

    @ManyToOne((type) => Rol, { nullable: false })
    @JoinColumn({ name: 'rol_id' })
    rol: Rol;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date;

    @Column({ default: false })
    deleted: boolean;

    @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: string;
}

import { Commande } from "src/commande/entities/commande.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Commande, (commande) => commande.user, { nullable: false })
    commande: Commande[]

    @Column({ type: 'varchar', length: 255, unique: true })
    userName: string;
    
    @Column({ type: 'varchar', length: 255 })
    fullName: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'varchar', length: 255, default: '' })
    address: string;

    @Column({ type: 'boolean', default: false })
    role: boolean;

    @Column({ type: 'varchar', length: 20, default: '' })
    phoneNumber: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

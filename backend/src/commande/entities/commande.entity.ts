import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entitiees/user.entity';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id, { nullable: false })
    user: User;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;  // Possible values: pending, active, refuse

    @Column({ type: 'timestamp' })
    order_time: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

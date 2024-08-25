import { Column, CreateDateColumn, Entity, ManyToOne,UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Commande } from 'src/commande/entities/commande.entity';
import { Breakfast } from 'src/breakfast/entities/breakfast.entity';

@Entity()
export class Detail_Commande {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Commande, commande => commande.id, { nullable: false })
    order: Commande;

    @ManyToOne(() => Breakfast, breakfast => breakfast.id, { nullable: false })
    breakfast: Breakfast;

    @Column({ type: 'integer' })
    quantite: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    montant: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

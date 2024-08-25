import { Detail_Commande } from 'src/detail-commande/entities/detailCommande.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Breakfast {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Detail_Commande, (detail_commande) => detail_commande.breakfast, { nullable: false })
    detail_commande: Detail_Commande[]

    @Column({ type: 'varchar', length: 255, default: '' })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'varchar', default: 'breakfast' })
    categorie: string;

    @Column({ type: 'varchar', length: 255, default: '' })
    image: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'varchar', length: 20, default: 'disponible' })  
    status: string;
}

import { Module } from '@nestjs/common';
import { DetailCommandeService } from './detail-commande.service';
import { DetailCommandeController } from './detail-commande.controller';
import { Detail_Commande } from './entities/detailCommande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Detail_Commande])], // Assurez-vous que l'entité est importée

  providers: [ DetailCommandeService],
  controllers: [DetailCommandeController]
})
export class DetailCommandeModule {}

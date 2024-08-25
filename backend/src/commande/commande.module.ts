import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commande } from './entities/commande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commande])], // Assurez-vous que l'entité est importée
  providers: [CommandeService],
  controllers: [CommandeController]
})
export class CommandeModule {}

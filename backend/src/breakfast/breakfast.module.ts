import { Module } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';
import { BreakfastController } from './breakfast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breakfast } from './entities/breakfast.entity';
import { BreakfastGateway } from './breakfast.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Breakfast])], // Assurez-vous que l'entité est importée
  providers: [BreakfastService,BreakfastGateway],
  controllers: [BreakfastController]
})
export class BreakfastModule {}

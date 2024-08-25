import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breakfast } from './entities/breakfast.entity';
import { BreakfastGateway } from './breakfast.gateway';

@Injectable()
export class BreakfastService {
    constructor(
        @InjectRepository(Breakfast)
        private readonly breakfastRepository: Repository<Breakfast>,
        // private readonly breakfastGateway: BreakfastGateway,
    ) {}

    async findAll(): Promise<Breakfast[]> {
        return this.breakfastRepository.find({
            order: {
                created_at: 'DESC',  // Tri par date de création, du plus récent au plus ancien
            },}
        );
    }

    async findOne(id: number): Promise<Breakfast> {
        return this.breakfastRepository.findOneBy({ id });
    }


    async create(breakfastNew: Breakfast): Promise<Breakfast> {
        const breakfast = this.breakfastRepository.create(breakfastNew);
        await this.breakfastRepository.save(breakfast);
        return breakfast;
      }

    async update(id: number, breakfast: Partial<Breakfast>): Promise<Breakfast> {
        await this.breakfastRepository.update(id, breakfast);
        return this.breakfastRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<number> {
        await this.breakfastRepository.delete(id);
        return id;
    }
}

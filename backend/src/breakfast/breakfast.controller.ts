import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';
import { Breakfast } from './entities/breakfast.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('breakfasts')
export class BreakfastController {
    constructor(private readonly breakfastService: BreakfastService) {}

    @Get()
    async findAll(): Promise<Breakfast[]> {
        return this.breakfastService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Breakfast> {
        return this.breakfastService.findOne(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() breakfast: Breakfast): Promise<Breakfast> {
        return this.breakfastService.create(breakfast);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() breakfast: Partial<Breakfast>): Promise<Breakfast> {
        return this.breakfastService.update(id, breakfast);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<number|undefined> {
        const myID= this.breakfastService.remove(id);
        return myID;
    }
}

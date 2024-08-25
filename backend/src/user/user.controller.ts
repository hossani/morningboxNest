import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from './currentuser.decorator';
import { UsersService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UsersService) {}

    @Get('me')
    @UseGuards(JwtAuthGuard)
   async getMe(@CurrentUser() user:any) {
       const fullUser=await this.userService.findOneByEmail(user.email);
      return {email:fullUser.email,role:fullUser.role};
    }
}


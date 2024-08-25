
import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req, @Res({ passthrough: true }) response) {
    return this.authService.login(req.user, response);
  }

    @Post('register')
   register(@Body() user: any) {
    return this.authService.register(user);
  }
}


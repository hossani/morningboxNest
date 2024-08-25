import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthStrategy } from './local.strategy';
import { JwtAuthStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:'secretcode',
      signOptions:{expiresIn:'1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalAuthStrategy,JwtAuthStrategy]
})
export class AuthModule {}


import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/user/user.service';
import  * as bcrpyt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entitiees/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService,

  ) {}

  async validateUser(email: string, password: string) {

    try {
        const user = await this.usersService.findOneByEmail(email);
        const authenticated = await bcrpyt.compare(password,user.password);
        console.log(authenticated);
        if (!authenticated) {
            console.log('error')
          throw new UnauthorizedException();
        }
        return user;
      } catch (error) {
        throw new UnauthorizedException('Credentails failed...');
      }
    }

    async login(user: any, response: Response) {
        const { password, ...result } = user;
        // const payload = { username: user.username, sub: user.id };
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + 12545825);
        const payload = { email: user.email, sub: user.id };
        const token = this.jwtService.sign(payload);
    
        response.cookie('Authentication', token, {
          secure: true,
          httpOnly: true,
          expires,
        });
        return {
          result,
          token,
        };
      }

      async register(user: any): Promise<User> {
        return this.usersService.create(user);
      }
}

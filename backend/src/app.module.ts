import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BreakfastModule } from './breakfast/breakfast.module';
import { CommandeModule } from './commande/commande.module';
import { DetailCommandeModule } from './detail-commande/detail-commande.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'HAMZA1997',
      database: 'food',
      autoLoadEntities: true,

      // entities: [
      //     __dirname + '/../**/*.entity{.ts,.js}',
      // ],
      synchronize: true,
    }),
    BreakfastModule,
    UserModule,
    CommandeModule,
    DetailCommandeModule
  ],
})
export class AppModule {}

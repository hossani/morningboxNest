import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieparser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',  // Remplacez par l'origine de votre frontend
});
  app.use(cookieparser());
  await app.listen(4000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.models';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

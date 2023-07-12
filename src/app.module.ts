import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/profile';
import { Post } from './typeorm/entities/post';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port: 3306,
    username: "root",
    password:"toor",
    database:"nestjs_mysql_tutorial",
    entities:[User, Profile, Post],
    synchronize: false
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
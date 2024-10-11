import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity'; 
import { Posts } from './posts/posts.entity'; 
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { UserController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'aluno',
      database: 'autenticacao',
      entities: [User, Posts], // Add your entities here
      synchronize: true, // Auto-create database schema, use cautiously
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController,UserController, PostsController],
  providers: [AppService],
})
export class AppModule {}

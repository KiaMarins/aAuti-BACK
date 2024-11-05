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
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'minas',
      database: 'autenticacao',
      entities: [User, Posts], 
      synchronize: true, 
    }),
    UsersModule,
    JwtModule.register({
      secret:"apalavrasecreta",
      signOptions:{ expiresIn: '1h'},
    }),
    PostsModule,
  ],
  controllers: [AppController,UserController, PostsController],
  providers: [AppService],
})
export class AppModule {}

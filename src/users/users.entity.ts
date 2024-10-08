import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { Posts } from '../posts/posts.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @OneToMany(() => Posts, (post)=> post.user)
  posts: Posts[];
}
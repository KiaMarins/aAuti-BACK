import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('posts')
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  title: string;

  @Column('text')
  post: string;

  @ManyToOne(() => User, (user)=> user.posts)
  user: User;
  
}
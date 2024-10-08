import { Posts } from '../posts/posts.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    posts: Posts[];
}

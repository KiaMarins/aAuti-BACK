import { UserService } from './users.service';
import { User } from './users.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    validateUser(user: Partial<User>): Promise<User>;
    update(id: number, user: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
}

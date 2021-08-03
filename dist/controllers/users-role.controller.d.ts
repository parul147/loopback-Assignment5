import { Users, Role } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersRoleController {
    usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    getRole(id: typeof Users.prototype.id): Promise<Role>;
}

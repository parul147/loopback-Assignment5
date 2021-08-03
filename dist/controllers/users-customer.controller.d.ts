import { Users, Customer } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersCustomerController {
    usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    getCustomer(id: typeof Users.prototype.id): Promise<Customer>;
}

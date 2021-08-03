import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Users, UsersRelations, Customer, Role } from '../models';
import { CustomerRepository } from './customer.repository';
import { RoleRepository } from './role.repository';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    protected customerRepositoryGetter: Getter<CustomerRepository>;
    protected roleRepositoryGetter: Getter<RoleRepository>;
    readonly CustomerUsers: BelongsToAccessor<Customer, typeof Users.prototype.id>;
    readonly roleUsers: BelongsToAccessor<Role, typeof Users.prototype.id>;
    constructor(dataSource: DbDataSource, customerRepositoryGetter: Getter<CustomerRepository>, roleRepositoryGetter: Getter<RoleRepository>);
}

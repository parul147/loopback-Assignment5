import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Users, UsersRelations, Customer, Role} from '../models';
import {CustomerRepository} from './customer.repository';
import {RoleRepository} from './role.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly CustomerUsers: BelongsToAccessor<Customer, typeof Users.prototype.id>;

  public readonly roleUsers: BelongsToAccessor<Role, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(Users, dataSource);
    this.roleUsers = this.createBelongsToAccessorFor('roleUsers', roleRepositoryGetter,);
    this.registerInclusionResolver('roleUsers', this.roleUsers.inclusionResolver);
    this.CustomerUsers = this.createBelongsToAccessorFor('CustomerUsers', customerRepositoryGetter,);
    this.registerInclusionResolver('CustomerUsers', this.CustomerUsers.inclusionResolver);
  }
}

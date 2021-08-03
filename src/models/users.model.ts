import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';
import {Role} from './role.model';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;
  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  middlename?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phonenumber?: string;

  @property({
    type: 'string',
  })
  role?: string;

  @property({
    type: 'string',
  })
  address?: string;
  @belongsTo(() => Customer, {name: 'CustomerUsers'})
  customer_id: string;

  @belongsTo(() => Role, {name: 'roleUsers'})
  role_id: string;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;

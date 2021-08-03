import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: string;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    email?: string;
    phonenumber?: string;
    role?: string;
    address?: string;
    customer_id: string;
    role_id: string;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;

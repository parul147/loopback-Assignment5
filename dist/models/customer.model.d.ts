import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id?: string;
    name?: string;
    website?: string;
    address?: string;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;

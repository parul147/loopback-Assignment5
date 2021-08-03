"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCustomerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersCustomerController = class UsersCustomerController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getCustomer(id) {
        return this.usersRepository.CustomerUsers(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/customer', {
        responses: {
            '200': {
                description: 'Customer belonging to Users',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Customer) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCustomerController.prototype, "getCustomer", null);
UsersCustomerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UsersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersCustomerController);
exports.UsersCustomerController = UsersCustomerController;
//# sourceMappingURL=users-customer.controller.js.map
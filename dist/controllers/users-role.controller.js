"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersRoleController = class UsersRoleController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getRole(id) {
        return this.usersRepository.roleUsers(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/users/{id}/role', {
        responses: {
            '200': {
                description: 'Role belonging to Users',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Role) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersRoleController.prototype, "getRole", null);
UsersRoleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UsersRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsersRepository])
], UsersRoleController);
exports.UsersRoleController = UsersRoleController;
//# sourceMappingURL=users-role.controller.js.map
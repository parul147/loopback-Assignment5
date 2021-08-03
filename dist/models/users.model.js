"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const customer_model_1 = require("./customer.model");
const role_model_1 = require("./role.model");
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "firstname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "middlename", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "lastname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "phonenumber", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "role", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "address", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => customer_model_1.Customer, { name: 'CustomerUsers' }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "customer_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => role_model_1.Role, { name: 'roleUsers' }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "role_id", void 0);
Users = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.model.js.map
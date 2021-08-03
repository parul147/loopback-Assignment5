"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
//Add Authenticate action to sequence
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
const rest_1 = require("@loopback/rest");
let MySequence = class MySequence {
    constructor(
    // ---- ADD THIS LINE ------
    authenticateRequest, findRoute, parseParams, //parameter parsing function
    invoke, //param_invoke , invokes the method specified by the route
    send, //merges response with invoked result
    reject) {
        this.authenticateRequest = authenticateRequest;
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
    }
    async handle(context) {
        try {
            const { request, response } = context; //destructuring
            const route = this.findRoute(request);
            // enabling jwt auth
            //call authentication action
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            //if errror pops from jwt authentication extension
            //make the stauscode 401
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            this.reject(context, err);
        }
    }
};
MySequence = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    tslib_1.__param(1, core_1.inject(rest_1.SequenceActions.FIND_ROUTE)),
    tslib_1.__param(2, core_1.inject(rest_1.SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(3, core_1.inject(rest_1.SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(4, core_1.inject(rest_1.SequenceActions.SEND)),
    tslib_1.__param(5, core_1.inject(rest_1.SequenceActions.REJECT)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map
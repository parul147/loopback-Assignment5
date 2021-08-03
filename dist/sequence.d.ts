import { AuthenticateFn } from '@loopback/authentication';
import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
export declare class MySequence implements SequenceHandler {
    protected authenticateRequest: AuthenticateFn;
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    constructor(authenticateRequest: AuthenticateFn, findRoute: FindRoute, parseParams: ParseParams, //parameter parsing function
    invoke: InvokeMethod, //param_invoke , invokes the method specified by the route
    send: Send, //merges response with invoked result
    reject: Reject);
    handle(context: RequestContext): Promise<void>;
}

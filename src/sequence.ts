//Add Authenticate action to sequence
import {inject} from '@loopback/core';
import {MiddlewareSequence} from '@loopback/rest';
import {
    AuthenticateFn,
    AuthenticationBindings,
    AUTHENTICATION_STRATEGY_NOT_FOUND,
    USER_PROFILE_NOT_FOUND,
  } from '@loopback/authentication';
  import {FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceActions, SequenceHandler} from '@loopback/rest';

export class MySequence implements SequenceHandler {

    constructor(
        // ---- ADD THIS LINE ------
        @inject(AuthenticationBindings.AUTH_ACTION)
        protected authenticateRequest: AuthenticateFn,
        @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
        @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams, //parameter parsing function
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod, //param_invoke , invokes the method specified by the route
    @inject(SequenceActions.SEND) public send: Send, //merges response with invoked result
    @inject(SequenceActions.REJECT) public reject: Reject,// action to call if invoke returns a rejected promise
      ) {}
    async handle(context: RequestContext){
        try{
            const {request, response} =context //destructuring
const route = this.findRoute(request);
// enabling jwt auth
//call authentication action
await this.authenticateRequest(request);
const args = await this.parseParams(request,route);
const result = await this.invoke(route, args);
this.send(response, result);
        }
        catch(err){
            //if errror pops from jwt authentication extension
            //make the stauscode 401
            if(err.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === USER_PROFILE_NOT_FOUND

            ){
                Object.assign(err, {statusCode: 401 /* Unauthorized */});
            }
            this.reject(context, err);
        }


    }
}

import {Request,Response} from "express";
export default class Controller {
    constructor(public req: Request, public res: Response) {
        this.req = req; this.res = res;
    }

    ok = 200;
    bad = 400;
    fatal = 500;
    unauthorized = 401;
    forbidden = 403; 

    respondWithJson(body: any) {
        this.res.status(this.ok).json(body);
    }

    respond(status = this.ok, body?: any) {
        this.res.status(status).send(body);
    }
}
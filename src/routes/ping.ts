import {Request, Response} from "express"
const ping = (e: any) => {
    const pingRouter = e.Router();
    pingRouter.get("", (req: Request, res: Response) => {
        res.send("pong");
    } )
    return pingRouter
}

export default ping
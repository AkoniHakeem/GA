import CharacterController from "../movies/controllers/charactersController"
import {Request, Response} from "express"
import { ICharactersService } from "../movies/services/charactersServices";

const _characterRouter = (e: any, service: ICharactersService) => {
    const characterRouter = e.Router();

    characterRouter.get("/list", 
    (req: Request, res: Response) => {
        new CharacterController(req, res).list(service)});

    return characterRouter;
}

export default _characterRouter;
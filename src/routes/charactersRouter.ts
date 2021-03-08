import characterController from "../movies/controllers/charactersController"
import {Request, Response} from "express"

const _characterRouter = (e: any) => {
    const characterRouter = e.Router();

    characterRouter.get("/list/:sort/:sortDirection/:filter/:filterValue", characterController.list);

    return characterRouter;
}

export default _characterRouter;
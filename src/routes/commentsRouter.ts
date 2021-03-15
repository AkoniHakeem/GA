import { Request, Response } from "express";
import CommentsController from "../movies/controllers/commentsController";
import { ICommentsService } from "../movies/services/commentsServices";

const _commentsRouter = (e: any, commentService: ICommentsService) => {
    const commentsRouter = e.Router();

    //
    commentsRouter.get("/list/:episode_id", (req: Request, res: Response) => new CommentsController(req, res).list(commentService))

    return commentsRouter
}

export default _commentsRouter
import commentsController from "../movies/controllers/commentsController";

const _commentsRouter = (e: any) => {
    const commentsRouter = e.Router();

    //
    commentsRouter.get("/list/:episode_id", commentsController.list)

    return commentsRouter
}

export default _commentsRouter
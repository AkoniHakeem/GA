import episodeController from "../movies/controllers/episodesController";

const _commentsRouter = (e: any) => {
    const commentsRouter = e.Router();

    //
    commentsRouter.get("/list/:episode_id", episodeController.list)

    return commentsRouter
}

export default _commentsRouter
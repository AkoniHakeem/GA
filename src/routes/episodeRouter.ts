import episodeController from "../movies/controllers/episodeController"

const _episodeRouter = (e: any) => {
    const episodeRouter = e.Router();
    episodeRouter.get("/list", episodeController.list);
    return episodeRouter
}

export default _episodeRouter
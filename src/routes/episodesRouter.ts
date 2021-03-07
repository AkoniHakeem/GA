import episodeController from "../movies/controllers/episodesController"

const _episodeRouter = (e: any) => {
    const episodeRouter = e.Router();

    //
    episodeRouter.get("/list", episodeController.list);

    //
    episodeRouter.get("/search/:character_id", episodeController.search)

    //
    episodeRouter.post("/add-comment", episodeController.addComment)

    return episodeRouter
}

export default _episodeRouter
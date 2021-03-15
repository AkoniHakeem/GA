import { Request, Response } from "express";
import EpisodeController from "../movies/controllers/episodesController"
import Episode from "../movies/model/episode";
import { IEpisodesService } from "../movies/services/episodesServices";

const _episodeRouter = (e: any, EpisodeService: IEpisodesService )=> {
    const episodeRouter = e.Router();

    //
    episodeRouter.get("/list", (req: Request, res: Response) => {new EpisodeController(req, res).List(EpisodeService)} );

    //
    episodeRouter.get("/list/:character_id", (req: Request, res: Response) => {new EpisodeController(req, res).Search(EpisodeService)})

    //
    episodeRouter.post("/add-comment", (req: Request, res: Response) => {new EpisodeController(req, res).AddComment(EpisodeService)})

    return episodeRouter
}

export default _episodeRouter
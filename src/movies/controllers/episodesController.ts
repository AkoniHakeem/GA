import  {Request, Response} from "express"
import Episode from "../model/episode"
import _sequelize from "sequelize"
import { getClientIp } from "../../lib/helpers"
import Comment from "../model/comment"
import Controller from "./baseController"
import { IEpisodesService } from "../services/episodesServices"
const episodeController: any = {}

class EpisodesController extends Controller{
    async List(EpisodesServices: IEpisodesService) {
        try {
            const episodesList = await EpisodesServices.List()
            this.respondWithJson(episodesList);
         } catch (error) {
             // todo log error
             console.log(error)
             this.respond(500)
         }
    }

    async Search(EpisodesServices: IEpisodesService) {
        try {
            const {character_id} = this.req.params as {character_id: string};
            const characters: any = await EpisodesServices.Search(Number(character_id))
            this.respondWithJson(characters.Episodes)
        } catch (error) {
            // todo log error
            console.log(error)
            this.respond(500);
        }
    }

    async AddComment(EpisodesServices: IEpisodesService) {
        try {
            const clientIpAddress = getClientIp(this.req);
            // this assumes that episode_id would be set in the body of the request along with the comment
            const {comment, episode_id} = this.req.body as {comment: string, episode_id: string}
            if(episode_id && comment) {
                const _comment = await EpisodesServices.AddComment(Number(episode_id), comment, clientIpAddress)
                if(_comment instanceof Comment) {
                    this.respond(200);
                }
                else {
                    // todo logging
                    this.respond(500);
                } 
            }
            else {
                this.respond(400, "Err: episode_id and comment are required fields")
            }
    
        } catch (error) {
            // todo log error
            console.log(error)
            this.respond(500)
        }
    }

}

export default EpisodesController
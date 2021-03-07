import  {Request, Response} from "express"
import Episode from "../model/episode"
import _sequelize from "sequelize"
import { getClientIp } from "../../lib/helpers"
import Comment from "../model/comment"
const episodeController: any = {}

/* 
Episode list endpoint should be sorted by “releaseDate” from oldest to newest and each episode should
be listed along with it the count of comments. == one endpoint ==
*/
episodeController.list = async (req: Request, res: Response) => {
    try {
       const episodesList = await Episode.findAll({
           order: ["created", "ASC"],
           attributes: { 
               include: [[_sequelize.fn("COUNT", _sequelize.col("Comment.id")), "comments" ]]
           }
       })

       // episodes should contain field for count of comments
       
       let epsi_json = JSON.stringify(episodesList)
       res.json(epsi_json);
    } catch (error) {
        // todo log error
        res.sendStatus(500)
    }
}

/* Search for a List of Episodes a Character featured in . */
episodeController.find = async (req: Request, res: Response) => {
    try {
        const {character_id} = req.query as {character_id: string};
        const character_Episodes = await Episode.findAll({where: {characterId: character_id}})
        res.status(200).json(character_Episodes)
    } catch (error) {
        // todo log error
        res.sendStatus(500)
    }
}

/* Add a comment to an Episode Object. */
episodeController.addComment = async (req: Request, res: Response) => {
    try {
        const clientIpAddress = getClientIp(req)
        // this assumes that episode_id would be set in the body of the request
        const comment = await Comment.create({...(req.body), ipAddress: clientIpAddress});
        if(comment instanceof Comment) {
            res.sendStatus(200);
        } 
    } catch (error) {
        // todo log error
        res.sendStatus(500)
    }
}

export default episodeController
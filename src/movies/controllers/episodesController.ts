import  {Request, Response} from "express"
import Episode from "../model/episode"
import _sequelize from "sequelize"
import { getClientIp } from "../../lib/helpers"
import Comment from "../model/comment"
import Character from "../model/character"
const episodeController: any = {}

/* 
Episode list endpoint should be sorted by “releaseDate” from oldest to newest and each episode should
be listed along with it the count of comments. == one endpoint ==
*/
episodeController.list = async (req: Request, res: Response) => {
    try {
       const episodesList = await Episode.findAll({
           subQuery: false,
           order: [["releaseDate", "ASC"]],
           attributes: { 
               include: [[_sequelize.fn("COUNT", _sequelize.col("Comments.episode_id")), "comments" ]]
           },
           include: [{model: Comment, attributes: []}],
           group: ["id"]
       })

       // episodes should contain field for count of comments
       
    //    let epsodes_json = JSON.stringify(episodesList)
       res.json(episodesList);
    } catch (error) {
        // todo log error
        console.log(error)
        res.sendStatus(500)
    }
}

/* Search for a List of Episodes a Character featured in . */
episodeController.search = async (req: Request, res: Response) => {
    try {
        const {character_id} = req.params as {character_id: string};
        const characters: any = await Character.findOne({
            where: {id: character_id},
            include: { model: Episode, as: "Episodes"}
        })
        // const character_Episodes = await Episode.findAll({where: {characterId: character_id}})
        res.status(200).json(characters.Episodes)
    } catch (error) {
        // todo log error
        console.log(error)
        res.sendStatus(500)
    }
}

/* Add a comment to an Episode Object. */
episodeController.addComment = async (req: Request, res: Response) => {
    try {
        const clientIpAddress = getClientIp(req)
        // this assumes that episode_id would be set in the body of the request along with the comment
        const {comment, episode_id} = req.body as {comment: string, episode_id: string}
        if(episode_id && comment) {
            const _comment = await Comment.create({episode_id, comment, ipAddressLocation: clientIpAddress, created: (new Date()).toLocaleDateString()});
            if(_comment instanceof Comment) {
                res.sendStatus(200);
            }
            else {
                // todo logging
                res.sendStatus(500);
            } 
        }
        else {
            res.status(400).send("Err: episode_id and comment are required fields")
        }

    } catch (error) {
        // todo log error
        console.log(error)
        res.sendStatus(500)
    }
}

export default episodeController
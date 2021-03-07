import sequelize from "../../lib/dbClient";
import _sequelize from "sequelize";
import {Request, Response} from "express";
import Comment from "../model/comment";


/* Comment list Endpoint should be retrieved in reverse chronological order with the public IP address of
the commenter and DateTime they were stored. == one endpoint == */
const commentsController: any = {}

commentsController.list = (req:Request, res: Response) => {
    try {
        const {episode_id} = req.query;
        let comments = Comment.findAll({
            where: {
                episode_id
            },
            order: [["created", "DESC"]]
        })
    } catch (error) {
        // todo: logging
        res.sendStatus(500);
    }
}

export default commentsController
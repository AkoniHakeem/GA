import sequelize from "../../lib/dbClient";
import _sequelize from "sequelize";
import {Request, Response} from "express";
import Comment from "../model/comment";
import Controller from "./baseController";
import { ICommentsService } from "../services/commentsServices";



class CommentsController extends Controller {
    async list(CommentsService: ICommentsService) {
        try {
            const {episode_id} = this.req.params
            if(episode_id) {
                let comments = await CommentsService.List(Number(episode_id));
                this.respondWithJson(comments);
            }
            else {
                this.respond(500, "Err: episode_id is a requied parameter");
            }
        } catch (error) {
            // todo: logging
            console.log(error)
            this.respond(500);
        }
    }
}

export default CommentsController
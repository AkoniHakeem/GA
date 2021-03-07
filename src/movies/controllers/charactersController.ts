import sequelize from "../../lib/dbClient"
import _sequelize from "sequelize"
import {Request, Response} from "express"
import Character from "../model/character"

/*  Character Endpoint should accept sort parameters to sort by one of name, gender in ascending or
descending order. == one endpoint ==
 Character Endpoint should also accept a filter parameter to filter by gender or status or location */
const characterController: any = {}

characterController.list = async (req: Request, res: Response) => {
    try {
        const {sort, direction, filter, filterValue} = 
            req.query as {sort: string, direction: string, filter: string, filterValue: string}
        // checking sort and filter are valid fields
        const sortIsValid = Object.keys(Character).findIndex(k => k === sort) !== -1;
        const filterBy = Object.keys(Character).findIndex(k => k === filter) !== -1 ? filter : "";
        
        if(sortIsValid) {
            const characters = await Character.findAll({
                order: [[sort, direction]],
                where: {
                    [`${filterBy}`]: filterValue || ""
                }
            })
            const _characters = JSON.stringify(characters)
            res.status(200).json(_characters);
        }
        else{
            res.status(400).send(`Err: sort field: ${sort} is not valid`);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}
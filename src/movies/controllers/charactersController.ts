import sequelize from "../../lib/dbClient"
import _sequelize, { Sequelize } from "sequelize"
import {Request, Response} from "express"
import Character from "../model/character"

/*  Character Endpoint should accept sort parameters to sort by one of name, gender in ascending or
descending order. == one endpoint ==
 Character Endpoint should also accept a filter parameter to filter by gender or status or location */
const characterController: any = {}

characterController.list = async (req: Request, res: Response) => {
    try {
        let {sort, sortDirection, filter, filterValue} = 
            req.query as {sort: string, sortDirection: string, filter: string, filterValue: string}

        if(!sort) {
            const characters = await Character.findAll();
            // const _characters = JSON.stringify(characters)
            res.status(200).json(characters);
        }
        else {
                const modelFields = ["firstName", "lastName", "status", "gender", "stateOfOrigin", "created"]
                // checking sort and filter are valid fields
                const sortFieldIsValid = modelFields.findIndex(k => k === sort) !== -1;
                sortDirection = sortDirection in ["ASC", "DESC"] ? sortDirection : "ASC"
                const filterBy = modelFields.findIndex(k => k === filter) !== -1 ? filter : "";
                // we have given the sorting preference over the filter
                if(sortFieldIsValid) {
                    const characters = await Character.findAll({
                        order: [[sort, sortDirection]],
                        where: filterBy? {
                            [`${filterBy}`]: filterValue || ""
                        } : undefined
                    })
                    // const _characters = JSON.stringify(characters)
                res.status(200).json(characters);
        }
        else{
            res.status(400).send(`Err: sort field: '${sort}' is not valid`);
        }
        } 
    } catch (error) {
        // todo: logging
        res.sendStatus(500);
    }
}

export default characterController
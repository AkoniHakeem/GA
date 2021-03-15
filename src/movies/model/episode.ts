import sequelize from "../../lib/dbClient"
import {DataTypes, NOW } from "sequelize"
import Comment from "./comment"
import Character from "./character"

let Episode = sequelize.define("Episode", {
    name: {type: DataTypes.STRING, allowNull: false},
    releaseDate: {type: DataTypes.DATE, allowNull: false},
    episodeCode: {type: DataTypes.STRING, allowNull: false},
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})


export default Episode
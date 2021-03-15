import { DataTypes, NOW } from "sequelize"
import sequelize from "../../lib/dbClient"
import Character from "./character"
import Episode from "./episode"

let Character_Episode = sequelize.define("Character_Episode", {

    created: {type: DataTypes.DATE, defaultValue: NOW}
}, {timestamps: false})


export default Character_Episode
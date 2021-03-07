import { DataTypes, NOW } from "sequelize"
import sequelize from "../../lib/dbClient"
import Character from "./character"
import Episode from "./episode"

let CharacterEpisode = sequelize.define("CharacterEpisodes", {created: {type: DataTypes.DATE, defaultValue: NOW}})

Character.belongsToMany(Episode, {
    through: CharacterEpisode
})

Episode.belongsToMany(Character, {
    through: CharacterEpisode
})
export default CharacterEpisode
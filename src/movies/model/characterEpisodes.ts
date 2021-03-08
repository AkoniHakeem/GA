import { DataTypes, NOW } from "sequelize"
import sequelize from "../../lib/dbClient"
import Character from "./character"
import Episode from "./episode"

let Character_Episode = sequelize.define("Character_Episode", {

    created: {type: DataTypes.DATE, defaultValue: NOW}
}, {timestamps: false})

// Character.belongsToMany(Episode, {
//     through: Character_Episode
//   })
  
  
//   Episode.belongsToMany(Character, {
//     through: Character_Episode
//   })

// Character.belongsToMany(Episode, {
//     through: Character_Episode
// })

// Episode.belongsToMany(Character, {
//     through: Character_Episode
// })
// Episode.hasMany(Character, (<any>{as: "", through: "Character_Episode"}))

// Character.hasMany(Episode, (<any>{as: "", through: "Character_Episode"}))

// Character_Episode.sync()

export default Character_Episode
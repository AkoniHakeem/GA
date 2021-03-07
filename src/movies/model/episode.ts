import sequelize from "../../lib/dbClient"
import {DataTypes, NOW } from "sequelize"
import Comment from "./comment"
// import Character from "./character"

let Episode = sequelize.define("Episode", {
    name: {type: DataTypes.STRING, allowNull: false},
    releaseDate: {type: DataTypes.DATE, allowNull: false},
    episodeCode: {type: DataTypes.STRING, allowNull: false},
    // character_id: {type: DataTypes.INTEGER},
    // episodeComments: {type: DataTypes.STRING},
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})

const episode_id = "episode_id"
// Episode.hasMany(Character, {
//     foreignKey: episode_id
// }) 

Episode.hasMany(Comment, {
    foreignKey: episode_id
})

/* 
EPISODE DATA : 
name* ( String ) , 
releaseDate* ( dateTime ) , 
episodeCode* ( String ) , 
characters ( Character Data Type ),
episodeComments ( Comment Data Type ) , 
created* (DateTime)
*/

export default Episode
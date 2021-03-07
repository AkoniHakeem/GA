import sequelize from "../../lib/dbClient"
import {DataTypes, NOW} from "sequelize"
// import Episode from "./episode"
import Location from "./location"

let Character = sequelize.define("Character", {
    firstName:{type: DataTypes.STRING, allowNull: false} ,
    lastname: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, validate:{isIn: [["ACTIVE", "DEAD", "UNKNOWN"]]}},
    stateOfOrigin: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING, allowNull: false, validate: {isIn: [["MALE", "FEMALE"]]}},
    location_id: {type: DataTypes.INTEGER, references: {model: Location, key: "id"}},
    // episode_id: {type: DataTypes.INTEGER, references: {model: Episode, key: "id"}},  
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})

// const character_key = "character_id"
// Character.hasMany(Episode, {foreignKey: character_key})

/* 
 CHARACTER DATA : 
 firstName* ( String ) ,
 lastName* ( String ) , 
 status* ( String – ‘ACTIVE’ or ‘DEAD’ or ‘UNKNOWN’) , 
 stateOfOrigin ( String ) , 
 gender* (String – ‘MALE’ or ‘FEMALE’ ) , 
 location ( Location Data
Type ) , 
episodes (Episode Data Type ) , 
created* (DateTime)
*/
export default Character
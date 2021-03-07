import sequelize from "../../lib/dbClient"
import {DataTypes, NOW} from "sequelize";
import Episode from "./episode";

let Comment = sequelize.define("Comment", {
    episode_id: {type: DataTypes.INTEGER, references: {model: Episode, key: "id"}},
    comment: {type: DataTypes.STRING, allowNull: false, validate: { max: 249 }},
    ipAddressLocation: {type: DataTypes.STRING, allowNull: false},
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})

/* 
COMMENTS DATA : 
comment* (String < 250 characters) , 
ipAddressLocation* (String) ,
created* (DateTime)
*/

export default Comment
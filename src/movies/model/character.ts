import sequelize from "../../lib/dbClient"
import {DataTypes, NOW} from "sequelize"
import Episode from "./episode"
import Location from "./location"

let Character = sequelize.define("Character", {
    firstName:{type: DataTypes.STRING, allowNull: false} ,
    lastName: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, validate:{isIn: [["ACTIVE", "DEAD", "UNKNOWN"]]}},
    stateOfOrigin: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING, allowNull: false, validate: {isIn: [["MALE", "FEMALE"]]}},
    locationId: {type: DataTypes.INTEGER, references: {model: Location, key: "id"}},
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})

export default Character
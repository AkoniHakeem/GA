import sequelize from "../../lib/dbClient";
import {DataTypes, NOW } from "sequelize"

let Location = sequelize.define("Location", {
    name: {type: DataTypes.STRING, allowNull: false},
    latitude: {type: DataTypes.DOUBLE, allowNull: false},
    longitude: {type: DataTypes.DOUBLE, allowNull: false},
    created: {type: DataTypes.DATE, allowNull: false, defaultValue: NOW}
})

/* 
LOCATION DATA : 
name* ( String ) , 
latitude* ( double ) , 
longitude* (double) ,
created* (DateTime)
*/

export default Location
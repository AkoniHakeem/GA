import {Sequelize} from "sequelize";
import config from "./config"

console.log("here are the loaded configurations", config);
const sequelize = new Sequelize(config["mysqlDb"]);

export default sequelize;
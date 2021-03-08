import {Sequelize} from "sequelize";
import config from "./config"

console.log(config);
const sequelize = new Sequelize(config["mysqlDb"]);

export default sequelize;
import express from "express";
import ping from "../routes/ping"
import sequelize from "./dbClient";
import config from "./config";
import _episodeRouter from "../routes/episodeRouter"

const app = express(); 
/* Routers */
const pingRouter = ping(express);
const episodeRouter = _episodeRouter(express);
/* Routers */

console.log(config["mysqlDb"]);
sequelize.authenticate().then((v: any) => {
  console.log("mysql connection was successful");
}).catch((err) => {
  console.log("there was an error connecting to mysql", err)
})

sequelize.sync().then((seq) => {
  console.log("database sync is active")
}).catch(err => {console.log("Err: error occurred while syncing")})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

const baseUrl = "/api/v1"

// app.use(baseUrl + "")
app.use("/ping", pingRouter);
app.use(baseUrl + "/episodes", episodeRouter) 

export default app;  
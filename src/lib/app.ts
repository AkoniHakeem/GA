import express from "express";
import ping from "../routes/ping"
import sequelize from "./dbClient";
import config from "./config";
import _episodeRouter from "../routes/episodesRouter"
import _characterRouter from "../routes/charactersRouter"
import _commentsRouter from "../routes/commentsRouter"
import Episode from "../movies/model/episode";
import Character from "../movies/model/character";
import Character_Episode from "../movies/model/characterEpisodes";
import modelAssociation from "../movies/model/associations";

const app = express(); 
/* Routers */
const pingRouter = ping(express);
const episodesRouter = _episodeRouter(express);
const commentsRouter = _commentsRouter(express);
const charactersRouter = _characterRouter(express)
/* Routers */

console.log(config["mysqlDb"]);
sequelize.authenticate().then((v: any) => {
  console.log("mysql connection was successful");
}).catch((err) => {
  console.log("there was an error connecting to mysql", err)
})
//
modelAssociation.run();
//
sequelize.sync().then((seq) => {
  console.log("database sync is active")
}).catch(err => {console.log("Err: error occurred while syncing", err)})

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
app.use(baseUrl + "/episodes", episodesRouter)
app.use(baseUrl + "/characters", charactersRouter)
app.use(baseUrl + "/comments", commentsRouter) 

export default app;  
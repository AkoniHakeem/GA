import express from "express";
import ping from "../routes/ping"
import sequelize from "./dbClient";
import config from "./config";
import _episodeRouter from "../routes/episodesRouter"
import _characterRouter from "../routes/charactersRouter"
import _commentsRouter from "../routes/commentsRouter"
import bodyParser from "body-parser"
import modelAssociation from "../movies/model/modelAssociations";

const app = express(); 
/* Routers */
const pingRouter = ping(express);
const episodesRouter = _episodeRouter(express);
const commentsRouter = _commentsRouter(express);
const charactersRouter = _characterRouter(express)
/* Routers */

sequelize.authenticate().then((v: any) => {
  console.log("mysql connection was successful");
}).catch((err) => {
  console.log("there was an error connecting to mysql", err)
})
// placed model association here due to issues with model assocition not be loaded corrected before sequelize sync
modelAssociation.run();
//
sequelize.sync().then((seq) => {
  console.log("database sync is active")
}).catch(err => {console.log("Err: error occurred while syncing", err)})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

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
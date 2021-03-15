import express from "express";
import ping from "../routes/ping";
import initDb from "./initDb"
import _episodeRouter from "../routes/episodesRouter"
import _characterRouter from "../routes/charactersRouter"
import _commentsRouter from "../routes/commentsRouter";
import CharacterService from "../movies/services/charactersServices";
import CommentsService from "../movies/services/commentsServices";
import EpisodesServices from "../movies/services/episodesServices";

const app = express(); 

/* Services */
  const services = {
    characterService: new CharacterService(),
    commentService: new CommentsService(),
    episodesService: new EpisodesServices()
  }
/* Services */

/* Routers */
const pingRouter = ping(express);
const episodesRouter = _episodeRouter(express, services.episodesService);
const commentsRouter = _commentsRouter(express, services.commentService);
const charactersRouter = _characterRouter(express, services.characterService)
/* Routers */

initDb()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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
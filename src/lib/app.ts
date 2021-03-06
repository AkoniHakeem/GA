import express from "express";
import ping from "../routes/ping"

const app = express(); 
const pingRouter = ping(express);

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

export default app;  
import * as http from "http";
import app from "./app";
import config from "./config"

let server: any = {};

server.createServer = http.createServer(app);
const port: any = config["httpPort"];

server.init = () => {
    server.createServer.listen(port, () => {
        console.log(`http server started on port ${port}`);
    })
} 

export default server;
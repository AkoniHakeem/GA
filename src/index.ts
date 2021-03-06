
import server from "./lib/server";

let appStarter: any = {}

appStarter.start = () => {
    server.init()
}

appStarter.start();
 
export default appStarter
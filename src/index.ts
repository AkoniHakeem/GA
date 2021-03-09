
import server from "./lib/server";

let appStarter: any = {}

appStarter.start = (callback?: any) => {
    server.init()

    setTimeout(() => {
        callback && callback();
    }, 5000);
}

if(require.main === module) {
    appStarter.start();
}
 
export default appStarter
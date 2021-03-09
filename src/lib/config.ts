
const environment: any = {};

environment.development = {
    "httpPort": 3000,
    "mysqlDb": process.env.MYSQL_DB
}

environment.testing = {
    "httpPort": 4000,
    "mysqlDb": process.env.MYSQL_DB
}

environment.staging = {
    "httpPort": 3000,
    "mysqlDb": ""
}

environment.production = {
    "httpPort": process.env.HTTP_PORT,
    "mysqlDb": process.env.MYSQL_DB
}
const envName = process.env.NODE_ENV? process.env.NODE_ENV.trim().toLocaleLowerCase() : "development";
console.log("service running in " + envName + " environment")
const einvironmentToExport = environment[envName]

export default einvironmentToExport;
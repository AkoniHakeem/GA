
const environment: any = {};

environment.development = {
    "httpPort": 3000,
    "mysqlDb": process.env.MYSQL_DB
}

environment.staging = {
    "httpPort": 3000,
    "mysqlDb": ""
}

environment.production = {
    "httpPort": 3000,
    "mysqlDb": process.env.MYSQL_DB
}
const envName = process.env.NODE_ENV? process.env.NODE_ENV.trim().toLocaleLowerCase() : "developmant";
const einvironmentToExport = environment[envName]

export default einvironmentToExport;
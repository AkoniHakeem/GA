
const environment: any = {};

environment.development = {
    "httpPort": 3000,
    "mysqlDb": "mysql://akoni_ga:e858iwdvxdax7ere@db-mysql-fra1-97803-ga-do-user-8368709-0.b.db.ondigitalocean.com:25060/movie?ssl-mode=REQUIRED"
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
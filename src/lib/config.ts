
const environment: any = {};

environment.development = {
    "httpPort": 3000
}

environment.staging = {
    "httpPort": 3000
}

environment.production = {
    "httpPort": 3000
}
const einvironmentToExport = environment[<any>process.env.NODE_ENV] || environment["development"]

export default einvironmentToExport;
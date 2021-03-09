## GA MOVIE API PROJECT
- This project is my effort on th coding assignment requested by GA.

## Description
- The project caputures specifications requiring to model a scenario based on the models present in the src/movie/model folder.
- The project has been developed in Javascript/Typescript in the node js environment.
- I have built the project to be flexible for both development and production environment. This method protects sensitive data which are only loaded at run time.
- A live version of this project runs on digital ocean app platform along with a managed mysql database server
- You can access the live project from here: https://ga-w2gvo.ondigitalocean.app/ping - "this should respond with a pong". Visit the api documentation section to see the available endpoints to query 

# Run the project
- You can clone the project from here https://github.com/AkoniHakeem/GA
- In your editor terminal type "npm build" to build and then run "npm run dev" to run the project locally. Bear in mind that you would need to provide valid values for HTTP_PORT, MYSQL_DB where HTTP_PORT is the port number you want the app to run on and MYSQL_DB is the mysql db connection string.

- ## Project Architecture
- I have used the MVC design pattern albeit with the View detached so we have the Model and Controller comibined into single module.
- The project has been written in typscript for dev support and maintenance. The build command generates the actual javascript that runs
- There is a separate lib that provides a more general support. It includes files such as server.ts, app.ts, dbClient, ... .
- The project's main entry is index.js generated from the index.ts during the build
- The build command 'npx tsc --watch' generates the javascript that runs and it can be found in the 'dist' folder. The '--watch' flag has been included here which helps to update the dist folder when there are chages in the ts files in the src folder.
- There is config file that helps to manage the environments veriable needed to run in each environment - development, staging and production.
- Test files are available in the tests folder, on the same level as the src folder, as separate modular. It a sort of end to end test availble in the api file in the tests folder. This test file when engaged tries to start the api in testing mode and then issue requests to the endpoints emulating a client-sever senario. Type 'npm run test' to see the test results

## Technology Stack
- Javascript
- Node Js
- Express Js
- Node testing library
- Sequelize (ORM)
- MySql database Server
- Git 
- Digital Ocean CI functionality and deployment
- Postman

## Containerization
- I have created a docker file to be used to create an image of a docker container environment.

## Api Documentation
A basic api documentation is available as a pdf file - 
GA/api documentation for ga_coding_assignment.pdf
You may also view it from here -
https://docs.google.com/document/d/1DhX2e7Nz6zY-R5Ug1OVdIiJVRqjgLE6USJE8PfLGMcc/edit?usp=sharing

- A more detailed api documentation is available as a json file generated with postman - GA_Movie_Api.postman_collection.json




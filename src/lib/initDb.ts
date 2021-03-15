import sequelize from "./dbClient"
import modelAssociation from "../movies/model/modelAssociations";

// I had to abstract this into a separate method due to the issue of arising when placed in the same file.
// i guess this has to do with how files ara being loaded and how sequelize internals are implemented
const initDb = () => {
    sequelize.authenticate().then((v: any) => {
        console.log("mysql connection was successful");
      }).catch((err) => {
        console.log("there was an error connecting to mysql", err)
      })
      // placed model association here due to issues with model assocition not be loaded corrected before sequelize sync
      modelAssociation.run();
      //
      sequelize.sync().then((seq) => {
        console.log("database sync is active")
      }).catch(err => {console.log("Err: error occurred while syncing", err)})
}

export default initDb
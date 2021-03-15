import Character from "./character"
import Character_Episode from "./characterEpisodes"
import Episode from "./episode"
import Comment from "./comment"
import Location from "./location"

const modelAssociation = {
    run: () => {
        Character.belongsToMany(Episode, {
            as: "Episodes",
            through: Character_Episode
          })

          Episode.belongsToMany(Character, {
            as: "Characters",
            through: Character_Episode
          })

          const episodeId = "episodeId"

        Episode.hasMany(Comment, {
            foreignKey: episodeId
        })

        Location.hasMany(Character, {
          foreignKey: "locationId"
        })
    }
}

export default  modelAssociation
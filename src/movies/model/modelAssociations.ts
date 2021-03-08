import Character from "./character"
import Character_Episode from "./characterEpisodes"
import Episode from "./episode"
import Comment from "./comment"

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

          const episode_id = "episode_id"

        Episode.hasMany(Comment, {
            foreignKey: episode_id
        })
    }
}

export default  modelAssociation
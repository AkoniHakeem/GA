import Episode from "../model/episode";
import _sequelize from "sequelize"
import Comment from "../model/comment"
import Character from "../model/character";


export interface IEpisodesService {
    List(): any;

    Search(episodeId: number): any;
    
    AddComment(episodeId: number, comment: string, clientIpAddress: string): any
}

class EpisodesServices implements IEpisodesService {
    List(): any {
        return _episodesServices.list();
    }

    Search(episodeId: number): any {
        return _episodesServices.search(episodeId)
    }

    AddComment(episodeId: number, comment: string, clientIpAddress: string): any {
        return _episodesServices.addComment(episodeId, comment, clientIpAddress)
    }
}

const _episodesServices = {
    list: async () => {
        const episodesList = await Episode.findAll({
            subQuery: false,
            order: [["releaseDate", "ASC"]],
            attributes: { 
                include: [[_sequelize.fn("COUNT", _sequelize.col("Comments.episodeId")), "comments" ]]
            },
            include: [{model: Comment, attributes: []}],
            group: ["id"]
        })

        return episodesList;
    },

    search: async (characterId: number) => {
        const characters: any = await Character.findOne({
            where: {id: characterId},
            include: { model: Episode, as: "Episodes"}
        })

        return characters;
    },

    addComment: async (episodeId: number, comment: string, clientIpAddress: string) => {
        return Comment.create({episodeId, comment, ipAddressLocation: clientIpAddress, created: (new Date()).toLocaleDateString()});
    }
}

export default EpisodesServices
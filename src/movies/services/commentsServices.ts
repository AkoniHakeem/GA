import Comment from "../model/comment";

export interface ICommentsService {
    List(episodeId: number): any;

    Create(episodeId: number, comment: string, clientIpAddress: string): any;
}

class CommentsService implements ICommentsService {
    async List(episodeId: number) {
        return _commentService.list(episodeId);
    }

    async Create(episodeId: number, comment: string, clientIpAddress: string) {
        return _commentService.create(episodeId, comment, clientIpAddress);
    }
}

const _commentService = {
    list: async (episodeId: number) => {
        let comments = await Comment.findAll({
            where: {
                episodeId
            },
            order: [["created", "DESC"]]
        })

        return comments;
    },

    create: async (episodeId: number, comment: string, clientIpAddress: string) => {
        return Comment.create({episodeId, comment, ipAddressLocation: clientIpAddress, created: (new Date()).toLocaleDateString()});
    }
}

export default CommentsService
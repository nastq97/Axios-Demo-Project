export type GetACommentResponse = {
    postId:number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type CommentBody = {
    name: string;
    email: string;
    body: string;
};

export type CreateACommentResponse = GetACommentResponse;

export type GetAllCommentsResponse = [];
import { CommentBody, CreateACommentResponse, GetAllCommentsResponse } from "../Types/comment.type";
import { requests, responseBody } from "./CommonAPI";

export const Comment = {
    getAllCommentsOfAPost: (postId: number): Promise<GetAllCommentsResponse> => requests.get(`posts/${postId}/comments`),
    createACommentForPost: (postId: number, body: CommentBody): Promise<CreateACommentResponse> => requests.post(`posts/${postId}/comments`, body),
}

//put the types/interdaces for the comments in here
//split verification in the comments/posts...
//put in one file all tests for Posts/Comments...
// only 1 describe in a file
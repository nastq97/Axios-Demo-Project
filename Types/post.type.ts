export type CreateAPostResponse = {
    id: number;
};

export type PostBody = {
    userId?: number;
    title?: string;
    body?: string;
};

export type UpdateAPostResponse = {
    userId: number;
    id: number;
    title?: string;
    body?: string;
};

export type GetAPostResponse = UpdateAPostResponse;

export type GetAllPostsResponse = {};

export type DeleteAPostResponse = '';
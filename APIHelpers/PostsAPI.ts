import { CreateAPostResponse, DeleteAPostResponse, GetAllPostsResponse, GetAPostResponse, PostBody, UpdateAPostResponse } from "../Types/post.type";
import { requests, responseBody } from "./CommonAPI";


export const Post = {
    getAllPosts: (): Promise<GetAllPostsResponse> => requests.get('posts/') ,
    getAllPostsforUser: (userId: number): Promise<GetAllPostsResponse> => requests.get(`posts/userId=${userId}`),
    getAPost: (id: number): Promise<GetAPostResponse> => requests.get(`posts/${id}`),
    createAPost: (body: PostBody): Promise<CreateAPostResponse> => requests.post('posts/', body),
    updateAPost: (body: PostBody, id: number): Promise<UpdateAPostResponse> => requests.put(`posts/${id}`, body),
    deleteAPost: (id: number): Promise<DeleteAPostResponse> => requests.delete(`posts/${id}`)
};

export class PostRequests {
//     //get it properly
//     static postsApiURL = 'baseURL' + '/posts';

//     //reuse this url in all requests 
//     //do the same for the comments as well
//     //add: pre-commit, pre-tier, eslint

//     static async getPosts(params?) {
//         //make the type assign dynamic
//         let responseType = params == true ? <GetAPostResponse> : <GetAllPostsResponse>;
//         try {
//                 let response = await axios<ResponseType>({
//                     method: 'get',
//                     url: this.postsApiURL,
//                     params: params
//                 });
//                 return response;
            
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     static async postPost(body) {
//         try {
//             let response = await axios<CreateAPostResponse>({
//                 method: 'post',
//                 url: this.postsApiURL,
//                 data: body
//             });
//             return response
//         } catch (err) {
//             if(axios.isAxiosError(err)){
//                 console.log('error message: ', err.message);
//                 return err.message;
//             }else{
//                 console.log('unexpected error: ', err);
//                 return 'An unexpected error occured.'
//             }
//             console.log(err);
//         }
//     }

//     static async patchPost(body, params?) {
//         try {
//             let response = await axios<UpdateAPostResponse>({
//                 method: 'put',
//                 url: this.postsApiURL,
//                 data: body,
//                 params: params
//             });
//             return response
//         } catch (err) {
//             if(axios.isAxiosError(err)){
//                 console.log('error message: ', err.message);
//                 return err.message;
//             }else{
//                 console.log('unexpected error: ', err);
//                 return 'An unexpected error occured.'
//             }
//             console.log(err);
//         }
//     }

//     static async deletePost(params) {
//         try {
//             let response = await axios<DeleteAPostResponse>({
//                 method: 'delete',
//                 url: this.postsApiURL,
//                 params: params
//             });
//             return response
//         } catch (err) {
//             if(axios.isAxiosError(err)){
//                 console.log('error message: ', err.message);
//                 return err.message;
//             }else{
//                 console.log('unexpected error: ', err);
//                 return 'An unexpected error occured.'
//             }
//             console.log(err);
//         }
//     }

}
import { PostFactory } from "../Factory/postFactory";
import { PostBody } from "../Types/post.type";


    export const InvalidPosts = [
        {
            "title": PostFactory.getPostElements.title
        },
        {
            "title": PostFactory.getPostElements.title,
            "body": PostFactory.getPostElements.body
        },
        {
            "userId": 1
        },
        {
            "userId": 55555555,
            "title": PostFactory.getPostElements.title,
            "body": PostFactory.getPostElements.body
        },
        {

        }
    ];

    export const UpdatedPostBody: PostBody = {
        title: PostFactory.getPostElements.title + ' updated',
        body: PostFactory.getPostElements.body + ' updated'
    }

    export const firstPostBody: PostBody = {
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }

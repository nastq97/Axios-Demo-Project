//Create a Post with valid data
export class PostFactory {

    PostCreateDefaultRequestBody(){
        return {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    }

    PostUpdateRequestBody(updatedBody){
        return {
            "userId": 1,
            "id": 2,
            "title": updatedBody.title,
            "body": updatedBody.body
        }
    }
}


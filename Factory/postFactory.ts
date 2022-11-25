import { faker } from "@faker-js/faker"
import { PostBody } from "../Types/post.type"


//Create a Post with valid data
export class PostFactory {

    static PostCreateDefaultRequestBody() : PostBody{
        return {
            userId: faker.random.numeric(),
            title: faker.lorem.slug(),
            body: faker.lorem.words()
        }
    }

    static getPostElements = {
        userId: faker.random.numeric(),
        title: faker.lorem.slug(),
        body: faker.lorem.words()
    }
}


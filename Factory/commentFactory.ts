import { faker } from "@faker-js/faker"
import { CommentBody } from "../Types/comment.type"

export class CommentFactory {
    static CommentCreateDefaultRequestBody() : CommentBody{
        return {
            //get random values for the ids
            //avoid having dublicated data
            //add the body in the test file
            //this file is better for mocking
            name: faker.name.firstName(),
            email: faker.company.name(),
            body: faker.lorem.text()
        }
    }
}
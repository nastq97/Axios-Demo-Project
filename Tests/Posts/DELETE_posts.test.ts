import { Post } from "../../APIHelpers/PostsAPI";

describe('Delete Posts Positive API Tests', () => {
    it('Delete a Post', () => {
        Post.deleteAPost(1)
        .then(body => {
           //Do validations here
        })
    });

});

describe('Delete Posts Negative API Tests', () => {
    it('Delete an invalid Post', () => {
        Post.deleteAPost(5555)
        .then(body => {
           //Do validations here
        })
    });
});
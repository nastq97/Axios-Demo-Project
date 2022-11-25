
import { Comment } from "../../APIHelpers/CommentsAPI";
import { CommentFactory } from "../../Factory/commentFactory";
import { CommentBody } from "../../Types/comment.type";
import { expect }from 'chai';
import { VerifyComments } from "../../APIHelpers/Verifications";

describe('Create comments for a particular post', () => {
    it('Create a comment for a particular post', () => {
        let body:CommentBody = CommentFactory.CommentCreateDefaultRequestBody();

        Comment.createACommentForPost(1, body)
        .then(response => {
           expect(response).to.equal(201);
           
           VerifyComments.VerifyPropertiesArePresent(response);
           VerifyComments.VerifyPropertyTypes(response);

            //Verify the properties values are correct
                expect(response.name).to.equal(body.name);
                expect(response.email).to.equal(body.email);
                expect(response.body).to.equal(body.body);
        });
    });
});
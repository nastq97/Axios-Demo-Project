import { Comment } from "../../APIHelpers/CommentsAPI";
import { expect }from 'chai';
import { VerifyComments } from "../../APIHelpers/Verifications";
import { responseBody } from "../../APIHelpers/CommonAPI";

describe('Get Comments API Tests', () => {
    it('Get all comments for a particular post', () => {
        Comment.getAllCommentsOfAPost(1)
        .then(response => {
            console.log('Status is here: ' + response);
                expect(status).to.equal(200);
                expect(response).to.be.a('array');

           //Verify all response properties are present
                response.forEach(post => {
                    VerifyComments.VerifyPropertiesArePresent(post);
           });
        })
    });
});
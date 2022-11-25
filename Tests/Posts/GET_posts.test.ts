import { Post } from "../../APIHelpers/PostsAPI";
import { expect }from 'chai';
import { firstPostBody } from "../../Data/posts";
import { VerifyPosts } from "../../APIHelpers/Verifications";

describe('Get Posts Positive API tests', () => {
    it('Get all posts', () => {
        Post.getAllPosts()
            .then(response => {
              //Verify the response status is 200
                expect(response).to.equal(200);

              //Verify the response is an array of objects
                expect(response).to.be.a('array');

              //Verify all response properties are present
            //   response.forEach((post) => {
            //     VerifyPosts.VerifyPropertiesArePresent(post);
            //   });
             
            });
    });

    it('Get the first post', () => {
        Post.getAPost(1)
        .then(response => {
           //Verify the response status is 200
                expect(response).to.equal(200);

           //Verify all response properties are present
           VerifyPosts.VerifyPropertiesArePresent(response);
            
            //Verify property types are correct
            VerifyPosts.VerifyPropertyTypes(response);

            //Verify the properties values are correct
                expect(response.title).to.equal(firstPostBody.title);
                expect(response).to.equal(firstPostBody.body);
        });
    });

    it('Get all posts for a User', () => {
        Post.getAllPostsforUser(1)
            .then(body => {
              //Verify the response status is 200
                expect(body).to.equal(200);

              //Verify the response is an array of objects
                expect(body).to.be.a('array');

              //Verify all response properties are present
            //   body.forEach(post => {
            //     VerifyPosts.VerifyPropertiesArePresent(post);
            //   });

              //Expect the userId to be correct
                expect(body).to.equal(1);
        });
    });

});

describe('Get Posts Negative API tests', () => {
    it('Get a post with invalid postId', () => {
        Post.getAPost(5555)
        .then(body => {
           //Verify the response status is 404
           expect(body).to.equal(404);
        })
    });

    it('Get all posts for an invalid User', () => {
        Post.getAllPostsforUser(5555)
            .then(body => {
                //Verify the response status is 200
                expect(body).to.equal(200);
            });
    });
});
import { expect } from 'chai';
import { PostDataGenerator } from '../../Data/generatePostData';
import { PostFactory } from '../../Factory/Request/Post/postFactory';

describe('Posts API service', () => {
it('Create a Post', (done) => {
    let body = JSON.stringify(PostFactory.PostCreateDefaultRequestBody());

    PostRequests.postPost(body)
    .then(body => {
       //Do validations here
    })
    //Make more decent error catching here
    .catch(err => done(err))
});

it('Update a Post', () => {

    let updatedBody = PostDataGenerator.generatePostUpdatedBody();
    let body = JSON.stringify(PostFactory.PostUpdateRequestBody(updatedBody));
 
    PostRequests.putPost(1, body)
    .then(body => {
       //Do validations here
    })
    //Make more decent error catching here
    .catch(err => done(err))
});
})
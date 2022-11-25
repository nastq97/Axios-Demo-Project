// import { expect } from 'chai';
// import { Post } from '../../APIHelpers/PostsAPI';
// import { VerifyPosts } from '../../APIHelpers/Verifications';
// import { InvalidPosts } from '../../Data/posts';
// import { PostFactory } from '../../Factory/postFactory';
// import { PostBody } from '../../Types/post.type';

// describe('Create Posts Positive API tests', () => {
//     it('Create a Post', () => {
//         let body:PostBody = PostFactory.PostCreateDefaultRequestBody();
    
//         Post.createAPost(body)
//         .then(response => {
//            //Verify the response status is 201
//            expect(response.status).to.equal(201);

//            //Verify all response properties are present
//            VerifyPosts.VerifyPropertiesArePresent(response);

//             //Verify property types are correct
//             VerifyPosts.VerifyPropertyTypes(response);

//             //Verify the properties values are correct
//                 expect(response.title).to.equal(body.title);
//                 expect(response.body).to.equal(body.body);
//         });
//     });
   
// });

// describe('Create Posts Negative API Tests', () => {
//     it('Attempt to Create a Post with not all required fields', () => {
//         let data : Array<PostBody> = InvalidPosts;
    
//         data.forEach((post: PostBody) => {
//             Post.createAPost(post)
//             .then(response => {
//                 //Verify the response status is 201
//                     expect(response.status).to.equal(201);
//             });
//         });
        
//     });
// });
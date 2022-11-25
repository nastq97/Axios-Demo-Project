// import { Post } from "../../APIHelpers/PostsAPI";
// import { InvalidPosts, UpdatedPostBody } from "../../Data/posts";
// import { PostBody } from "../../Types/post.type";
// import { expect } from 'chai';
// import { VerifyPosts } from "../../APIHelpers/Verifications";

// describe('Update Posts API Positive Tests', () => {
//     it('Update a Post', () => {

//         let updatedBody:PostBody = UpdatedPostBody;
     
//         Post.updateAPost(updatedBody, 1)
//         .then(response => {
//            //Verify the response status is 201
//            expect(response.status).to.equal(201);

//            //Verify all response properties are present
//            VerifyPosts.VerifyPropertiesArePresent(response)

//             //Verify property types are correct
//             VerifyPosts.VerifyPropertyTypes(response);

//             //Verify the properties values are correct
//                 expect(response.title).to.equal(updatedBody.title);
//                 expect(response.body).to.equal(updatedBody.body);
//         })
//     });
// });

// describe('Update Posts API Negative Tests', () => {
//     it('Update a Post with invalid data', () => {
   
//         let updatedBody: Array<PostBody> = InvalidPosts;
     
//         updatedBody.forEach((post: PostBody) => {
//             Post.updateAPost(post, 1)
//             .then(body => {
//                //Do validations here
//             })
//         });
//     });
// });
import { expect }from 'chai';
import { CommentBody } from '../Types/comment.type';

export class VerifyPosts{
    static VerifyPropertiesArePresent(response){
        //Verify all response properties are present
            expect(response).to.have.property('userId');
            expect(response).to.have.property('id');
            expect(response).to.have.property('title');
            expect(response).to.have.property('body');
    };

    static VerifyPropertyTypes(response){
        expect(response.userId).to.be.a('number');
        expect(response.id).to.be.a('number');
        expect(response.title).to.be.a('string');
        expect(response.boby).to.be.a('string');
    }
};

export class VerifyComments{
    static VerifyPropertiesArePresent(response: CommentBody): void {
        expect(response).to.have.property('postId');
        expect(response).to.have.property('id');
        expect(response).to.have.property('name');
        expect(response).to.have.property('email');
        expect(response).to.have.property('body');
    };

    static VerifyPropertyTypes(response){
        expect(response.postId).to.be.a('number');
        expect(response.id).to.be.a('number');
        expect(response.name).to.be.a('string');
        expect(response.email).to.be.a('string');
        expect(response.body).to.be.a('string');
    }
}


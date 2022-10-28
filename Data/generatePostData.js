export class PostDataGenerator{
    generatePostUpdatedBody(){
        return  {
            tite: faker.name.findName(),
            body: faker.name.jobTitle(),
        }
    }
}
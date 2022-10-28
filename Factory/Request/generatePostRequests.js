import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

class PostRequests {

    async getPosts() {
        try {
            
            let response = await axios.get(URL, {
                headers: {
                    'Authorization': ""
                }
            });
            return response
        } catch (err) {
            console.log(err);
        }
    }

    //Which approach is better?
    async postPost (data) {
        try {
            let responsee = await axios({
                method: 'post',
                url: URL,
                data: data,
                headers: ''
            });

            return response
        } catch (err) {
            console.log(err);
        }
    }

    async putPost(path, data) {
        try {
            
            let response = await axios.put(URL + path, data, {
                headers: {
                    'Authorization': ""
                }
            });
            return response
        } catch (err) {
            console.log(err);
        }
    }
}

export default new PostRequests();
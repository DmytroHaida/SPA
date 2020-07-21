import * as axios from 'axios';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers:  {
        'content-type': 'application/json'
    }
})

export const NewsPostsAPI = {
    getPosts() {
        return instance.get(`blog/newsPosts`);
    },
    addPost(obj) {
        return instance.post(`blog/newsPosts/`, obj );
    },
    editPost(obj){
        return instance.put(`blog/newsPosts/${obj._id}`, obj)
    },
    deletePost(postsId) {
        return instance.delete(`/blog/newsPosts/${postsId}`)
    }
}
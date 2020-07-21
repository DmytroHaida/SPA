import { NewsPostsAPI } from '../API/API';

const SET_NEWS_POSTS = 'SET_NEWS_POSTS';
const SET_EDIT_POST_DATA = 'SET_EDIT_POST_DATA';


let initialState = {
    
    posts: [
        {
            _id: null,
            BlogImage: 'some image url',
            BlogHeader: 'some head text',
            BlogBody: 'some body text',
            createdAt: null,
            updatedAt: null
        }
    ],
    currentPostsValueForEdit: null ,
}


const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_POSTS:
            return {
                ...state, posts:  action.posts
            }
        case SET_EDIT_POST_DATA:
            return {
                
                ...state, currentPostsValueForEdit: action.CurrentPostsValue
            }
        default:
            return state
    }
}
//action creator
export const setPosts = (posts) => ({ type: SET_NEWS_POSTS, posts })
export const setCurrentPostsValue = (CurrentPostsValue) => ({type: SET_EDIT_POST_DATA, CurrentPostsValue})

//thunk dispatch

export const getPosts = (posts) => async (dispatch) => {
    let response = await NewsPostsAPI.getPosts(posts)
    let postsData = response.data.blogs
    dispatch(setPosts(postsData))
}
export const addPostBody = (posts) => async (dispatch) => {
    await NewsPostsAPI.addPost(posts)
    dispatch(getPosts());
}
export const deletePost = (id) => async (dispatch) => {
    await NewsPostsAPI.deletePost(id);
    dispatch(getPosts());
}
export const editPost = (obj) => async (dispatch) => {
    await NewsPostsAPI.editPost(obj)
    dispatch(getPosts());
}

export default PostsReducer;

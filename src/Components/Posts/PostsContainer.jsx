import React from 'react';
import Posts from './Posts';
import PostCreatorReduxForm from "./PostCreator";
import { connect } from 'react-redux';
import { addPostBody, getPosts, deletePost, editPost } from '../../redux/reducer/PostsReducer';

const NewPostContainer =(props) => {

        const postEditor = (obj) => {
            props.editPost(obj)
        }
        const onSubmit = (formData) => {
            let PostBody = formData
            props.addPostBody(PostBody)
        }
        const deletePost = (id) => {
            props.deletePost(id)
        }
        return (
            <div>
                <button onClick={() => props.getPosts()}>GET</button>

                <Posts posts={props.posts}
                    deletePost={deletePost}
                    postEditor={postEditor}
                />
                <PostCreatorReduxForm onSubmit={onSubmit}
                />
            </div>
        )
    }
    
const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, { addPostBody, getPosts, deletePost, editPost })(NewPostContainer)
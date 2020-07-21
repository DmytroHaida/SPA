import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import PostsReducer from '../reducer/PostsReducer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    posts: PostsReducer,
    form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
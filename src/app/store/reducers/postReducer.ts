import { ACTION_ADD_POST, ACTION_LOAD_POSTS, ACTION_CLEAR_POSTS } from '../actions/postActions';
import { Post } from '../../posts/post';

export interface PostReducerState{
    posts: Array<Post>
}

const initialState: PostReducerState = {
    posts: []
}

export function postReducer(state = initialState, action): PostReducerState{
    switch(action.type){
        case ACTION_LOAD_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            }
        case ACTION_CLEAR_POSTS:
            return {
                ...state,
                posts: []
            }
        case ACTION_ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
    }
    return state;
}
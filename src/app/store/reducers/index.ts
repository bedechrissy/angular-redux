import { postReducer, PostReducerState } from './postReducer';
import { ActionReducerMap } from '@ngrx/store';

interface AppState {
    postReducer: PostReducerState
}

export const reducers: ActionReducerMap<AppState> = {
    postReducer: postReducer
}


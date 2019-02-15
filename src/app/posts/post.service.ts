/** This is a sample service which handles tasks relating to Post items */
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { DataService } from '../core/data.service';
import { Store } from '@ngrx/store';
import { ACTION_ADD_POST, ACTION_LOAD_POSTS, ACTION_CLEAR_POSTS  } from '../store/actions/postActions';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const routes = {
    posts: () => `/posts`,
};

@Injectable()
export class PostService extends DataService<Post> {

    constructor(http: HttpClient,
                private store: Store<Post>) {
        super(http, baseUrl, routes.posts());
    }

    addPost(post: Post){
        this.store.dispatch({
            type: ACTION_ADD_POST,
            post: post
        });
    }

    clearPosts() {
        this.store.dispatch({
            type: ACTION_CLEAR_POSTS
        });
    }

    fetchPosts() {
        this.getAll().subscribe((posts: Array<Post>) => {
            this.store.dispatch({
                type: ACTION_LOAD_POSTS,
                posts: posts
            })
        });
    }

    loadPosts() {
        return this.store.select('postReducer');
    }

    checkStateForPosts(){
        let postCount = 0;

        this.store.select('postReducer')
        .subscribe(data => {
           postCount = data.posts.length;
        });

        return postCount > 0 ? true : false;
    }
}
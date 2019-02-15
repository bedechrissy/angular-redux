import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  constructor(private router: Router,
              private postService: PostService) { }

  /** Props */
  posts: Array<Post> = [];
  postsDisplayed: Boolean = false;
  postsInState: Boolean = false;
  statusText: string;

  /* On Initialisation */
  ngOnInit() {
    this.postsInState = this.postService.checkStateForPosts();

    console.log(this.postsInState);
  }

  /* Functions */
  addPost(){
    this.router.navigateByUrl('/add');
  }

  fetchPosts(){
    this.postService.fetchPosts();

    this.postsInState = true;
  }

  loadPosts(){
    this.postService.loadPosts().subscribe(data => {
      this.posts = data.posts;
    });

    this.postsDisplayed = true;
  }

  hidePosts(){
    this.posts = [];

    this.postsDisplayed = false;
  }

  clearPosts(){
    this.postService.clearPosts();

    this.postsDisplayed = false;
    this.postsInState = false;
  }
}

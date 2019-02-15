import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [PostService]
})
export class AddPostComponent {

    constructor(private fb: FormBuilder, 
                private postService: PostService,
                private router: Router){}

    addPostForm = this.fb.group({
        title: ['', Validators.required],
        body: ['', Validators.required]});

    addPost(){
        const formData = this.addPostForm.value;
        const post = new  Post(formData.title, formData.body);

        this.postService.addPost(post);

        this.router.navigateByUrl('/posts');
    }
}

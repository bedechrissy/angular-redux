import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatButtonToggleModule } from '@angular/material'


@NgModule({
  declarations: [
    AddPostComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
      CommonModule,
      FormsModule, 
      ReactiveFormsModule,
      MatCardModule, 
      MatInputModule, 
      MatButtonModule, 
      MatButtonToggleModule],
  providers: [],
  bootstrap: []
})
export class PostsModule { }

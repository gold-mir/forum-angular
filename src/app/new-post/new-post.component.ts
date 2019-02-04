import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public title: string = '';
  public body: string = '';
  public author: string;

  public errorMessage: string;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.author = "Anonymous User";
  }

  async submit(){
    if(this.title != ''){
      let id = await this.postService.newPost(new Post(this.title, this.body, this.author));
      this.router.navigate(['post', id]);
    } else {
      this.errorMessage = "Title cannot be empty."
    }
  }

}

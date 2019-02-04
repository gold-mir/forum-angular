import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [PostService]
})
export class MainPageComponent implements OnInit {

  public postsObservable: Observable<Post[]>;
  public posts: Post[];

  constructor(public postService :PostService, private router :Router) { 
  }

  ngOnInit() {
    this.postsObservable = this.postService.getPosts();
    this.postsObservable.subscribe((input) => {
      this.posts = input;
    });
  }

}

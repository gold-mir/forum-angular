import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  public postID: string = null;
  public postObs: Observable<Post>;
  public post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postID = params.get('id');
      this.postObs = this.postService.getByID(this.postID);
      this.postObs.subscribe((post: Post) => {
        this.post = post;
      });
    });
  }

}

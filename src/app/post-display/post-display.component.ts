import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  public postID: string = null;
  public post: Observable<Post>;
  public postData: Post;

  public comments: Observable<Comment[]>;
  public commentData: Comment[];

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postID = params.get('id');
      this.post = this.postService.getByID(this.postID);
      this.comments = this.postService.getComments(this.postID);

      this.post.subscribe((post: Post) => {
        this.postData = post;
      });

      this.comments.subscribe((comments) => {
        this.commentData = comments;
        console.log(this.commentData);
      });
    });
  }

}

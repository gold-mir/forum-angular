import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() parentID: string;

  public body: string;

  public errorMessage: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submit(){
    if(this.body != null && this.body != ''){
      this.postService.newComment(this.parentID, new Comment("Anonymous User", this.body));
    } else {
      this.errorMessage = "Comment can't be empty";
    }
  }

}

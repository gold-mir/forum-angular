import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {

  @Input() comments: Observable<Comment[]>;

  constructor() { }

  ngOnInit() {
  }

}

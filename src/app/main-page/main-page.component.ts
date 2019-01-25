import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [PostService]
})
export class MainPageComponent implements OnInit {

  constructor(private postService :PostService) { }

  ngOnInit() {
  }

}

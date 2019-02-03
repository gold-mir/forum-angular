import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [PostService]
})
export class MainPageComponent implements OnInit {

  constructor(public postService :PostService, private router :Router) { }

  ngOnInit() {
  }

}

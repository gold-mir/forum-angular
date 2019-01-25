import { Component } from '@angular/core';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum';
  public posts :Post[] = [
    new Post('KITTENS', 'Puppies'),
    new Post('uwu', 'OWO???'),
    new Post('This is a post', 'this is a body')
  ];
}

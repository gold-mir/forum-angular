import { Injectable } from '@angular/core';
import { Post } from 'src/models/post.model';

const POSTS = [
  new Post('KITTENS', 'Puppies'),
  new Post('uwu', 'OWO???'),
  new Post('This is a post', 'this is a body')
];

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(){
    return POSTS;
  }
}

import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

const POSTS = [
  new Post('KITTENS', 'Puppies', 'SomeGuy'),
  new Post('uwu', 'OWO???', 'SomeGuy'),
  new Post('This is a post', 'this is a body', 'SomeGuy')
];

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private db: AngularFireDatabase) {

  }

  getPosts(){
    let posts = this.db.list('posts');
    // return posts.valueChanges();
    return new Observable<any>((observer) => {
      posts.valueChanges().subscribe((data: any) => {
        let posts = [];
        for(let item of data){
          posts.push(new Post(item.title, item.body, item.author));
        }
        observer.next(posts);
      });
    });
  }
}

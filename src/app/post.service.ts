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
    return new Observable<Post[]>((observer) => {
      posts.snapshotChanges().subscribe((data: any) => {
        let posts = [];
        for(let meta of data){
          let item = meta.payload.val();
          posts.push(new Post(item.title, item.body, item.author, meta.key));
        }
        observer.next(posts);
      });
    });
  }

  getByID(id: String){
    let post = this.db.object(`posts/${id}`).snapshotChanges();

    return new Observable<Post>((observer) => {
      post.subscribe((data: any) => {
        let postData = data.payload.val();
        let output = new Post(postData.title, postData.body, postData.author, data.key);
        observer.next(output);
      });
    });
  }
}

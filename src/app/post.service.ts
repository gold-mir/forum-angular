import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private db: AngularFireDatabase) {

  }

  getPosts(){
    let postsObservable = this.db.list('posts').snapshotChanges();

    return new Observable<Post[]>((observer) => {
      postsObservable.subscribe((data: any) => {
        let posts: Post[] = [];
        for(let meta of data){
          let item = meta.payload.val();
          posts.push(new Post(item.title, item.body, item.author, meta.key));
        }
        observer.next(posts);
      });
    });
  }

  getByID(id: string){
    let post = this.db.object(`posts/${id}`).snapshotChanges();

    return new Observable<Post>((observer) => {
      post.subscribe((data: any) => {
        if(data.key == null){
          observer.next(null);
        } else {
          let postData = data.payload.val();
          let output = new Post(postData.title, postData.body, postData.author, data.key);
          observer.next(output);
        }
      },
      (error) => {
        console.log(error);
        observer.error(error);
      });
    });
  }
  getComments(id: string){
    let commentsObservable = this.db.list(`comments/${id}`).snapshotChanges();

    return new Observable<Comment[]>((observer) => {
      commentsObservable.subscribe((data: any) => {
        let comments: Comment[] = [];
        for(let meta of data){
          let item = meta.payload.val();
          comments.push(new Comment(item.author, item.body, meta.key));
        }
        observer.next(comments);
      });
    });
  }
}

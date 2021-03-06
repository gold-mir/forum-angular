import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { routing } from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDisplayComponent } from './post-display/post-display.component';

import { environment } from './../environments/environment';
import { PostService } from './post.service';
import { CommentDisplayComponent } from './comment-display/comment-display.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainPageComponent,
    PostDisplayComponent,
    CommentDisplayComponent,
    NewPostComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { routing } from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDisplayComponent } from './post-display/post-display.component';

import { environment } from './../environments/environment';
import { PostService } from './post.service';
import { CommentDisplayComponent } from './comment-display/comment-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainPageComponent,
    PostDisplayComponent,
    CommentDisplayComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

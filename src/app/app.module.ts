import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { routing } from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDisplayComponent } from './post-display/post-display.component';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainPageComponent,
    PostDisplayComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

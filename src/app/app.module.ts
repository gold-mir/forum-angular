import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { routing } from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDisplayComponent } from './post-display/post-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainPageComponent,
    PostDisplayComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

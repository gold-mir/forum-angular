import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostDisplayComponent } from './post-display/post-display.component';

const appRoutes: Routes = [{
    path: '',
    component: MainPageComponent
},
{
    path: 'post/:id',
    component: PostDisplayComponent
}];

export const routing :ModuleWithProviders = RouterModule.forRoot(appRoutes);
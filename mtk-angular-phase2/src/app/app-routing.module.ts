import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { MainThemeTwoComponent } from './layout/main-theme-two/main-theme-two.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: 'login',
    component: MainComponent,
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'article',
    component: MainThemeTwoComponent,
    loadChildren: './function/function.module#FunctionModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

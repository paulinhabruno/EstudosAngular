import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './views/pages/feed/feed.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PostDetailComponent } from './views/pages/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '', //rota raiz
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'post-datail',
    component: PostDetailComponent
  }
]; // dentro da lista cadastramos as rotas

@NgModule({ //Essa notação importa o RoutingModule e o Routes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

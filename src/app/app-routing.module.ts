import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumFormComponent } from './Albums/album-form/album-form.component';
import { AlbumPageComponent } from './Albums/album-page/album-page.component';
import { ArticleDetailPageComponent } from './Articles/article-detail-page/article-detail-page.component';
import { ArticleFormComponent } from './Articles/article-form/article-form.component';
import { ArticlePageComponent } from './Articles/article-page/article-page.component';
import { UserPageComponent } from './Users/user-page/user-page.component';

const routes: Routes = [
  {
    path: "articles", children: [
      { path: "", component: ArticlePageComponent },
      { path: "create", component: ArticleFormComponent },
      { path: ":id", component: ArticleDetailPageComponent },
    ]
  },
  {
    path: "users", component: UserPageComponent
  },
  {
    path: "albums", component: AlbumPageComponent
  },
  {
    path: "albums/create", component: AlbumFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesService } from './Articles/articles.service';
import { CardComponent } from './Articles/card/card.component';
import { ArticlePageComponent } from './Articles/article-page/article-page.component';
import { UserPageComponent } from './Users/user-page/user-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArticleDetailPageComponent } from './Articles/article-detail-page/article-detail-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsercardComponent } from './Users/usercard/usercard.component';
import { AlbumPageComponent } from './Albums/album-page/album-page.component';
import { AlbumInfoComponent } from './Albums/album-info/album-info.component';
import { CompteurComponent } from './shared/compteur/compteur.component';
import { AlbumFormComponent } from './Albums/album-form/album-form.component';
import { ArticleFormComponent } from './Articles/article-form/article-form.component';

@NgModule({
  // les composants utilisables par le module
  declarations: [
    AppComponent,
    CardComponent,
    ArticlePageComponent,
    UserPageComponent,
    NavbarComponent,
    ArticleDetailPageComponent,
    UsercardComponent,
    AlbumPageComponent,
    AlbumInfoComponent,
    CompteurComponent,
    AlbumFormComponent,
    ArticleFormComponent
  ],
  // les modules à charger
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // en général les service, des classes qui chargent des infos
  // services HTTP, Formulaires, gestionnaires de Modales
  providers: [ArticlesService],
  // les composants àcharger au démarage de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesService } from './Articles/articles.service';
import { CardComponent } from './card/card.component';

@NgModule({
  // les composants utilisables par le module
  declarations: [
    AppComponent,
    CardComponent
  ],
  // les modules à charger
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // en général les service, des classes qui chargent des infos
  // services HTTP, Formulaires, gestionnaires de Modales
  providers: [ArticlesService],
  // les composants àcharger au démarage de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }

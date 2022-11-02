import { Component, OnInit } from '@angular/core';
import { Article } from './Articles/article';
import { ArticlesService } from './Articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-ng';
  desactive = false;

  date = new Date();

  newArticle: Article = {
    title : "",
    content: "",
  }

  articles: Article[] = [];

  // Injection de la dépendance ArticleService
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    console.log("App chargé");
    this.recupererArticles();
  }
  
  toggleButton() {
    this.desactive = !this.desactive;
  }
  
  recupererArticles() {
    this.articles = this.articlesService.getArticles();
  }

  addArticle(){
    this.articlesService.addArticle({...this.newArticle});
  }

  changerValeur(){
    this.newArticle.title = "Poulet";
    this.newArticle.content = "Machin truc bidule";
  }

}

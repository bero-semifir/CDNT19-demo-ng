import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  title= 'Articles';
  desactive = false;

  date = new Date();


  newArticle: Article = {
    title : "",
    body: "",
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
    this.articlesService.getArticles()
    .subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  addArticle(){
    this.articlesService.addArticle({...this.newArticle});
  }

  changerValeur(){
    this.newArticle.title = "Poulet";
    this.newArticle.body = "Machin truc bidule";
  }

}

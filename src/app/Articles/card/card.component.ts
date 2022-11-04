import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  // le "!" indique au compilateur que tout va bien se passer!
  // il indique à TS que la variable aura toujours une valeur
  @Input() article!: Article;

  constructor(private articlesService: ArticlesService) {
    console.log("Constructeur !")
  }

  ngOnInit(): void {
    console.log("Fin de l'initialisation")
  }

  ngOnDestroy(): void {
    console.log("destruction !")
  }

  deleteArticle(article: Article): void {
    this.articlesService.deleteArticle(article);
  }

}

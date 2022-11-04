import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {

  article!: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params) => {
          this.recupArticle(params['id']);
        });
  }

  recupArticle(id: number) {
    this.articleService.getArticleById(id)
      .subscribe(
        (article: Article) => {
          this.article = article;
        })
  }

}

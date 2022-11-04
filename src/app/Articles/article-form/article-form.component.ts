import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  form: FormGroup;

  constructor(private articleService: ArticlesService) {
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(20), Validators.maxLength(80)]),
      body: new FormControl("", [Validators.required, Validators.minLength(200)]),
    });
  }

  ngOnInit(): void {
  }

  createArticle() {
    console.log(this.form);
    let newArticle = this.form.value as Article;
    newArticle.userId = 1;
    if (this.form.valid) {
      this.articleService.addArticle(newArticle)
        .subscribe((resp) => console.log(resp));
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère les articles
   * @returns La liste des articles
   */
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/posts");
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/posts/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post("http://localhost:3000/posts", article);
  }

  deleteArticle(article: Article) {
    return this.http.delete(`http://localhost:3000/posts/${article.id}`);
  }

  updateArticle(id: number, article: Article) {
    return this.http.put(`http://localhost:3000/posts/${id}`, article);
  }

}

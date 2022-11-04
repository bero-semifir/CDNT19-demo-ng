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
    return this.http.get<Article[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", article);
  }

  deleteArticle(article: Article) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${article.id}`);
  }

  updateArticle(id: number, article: Article) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, article);
  }

}

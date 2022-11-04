import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './article';

const API_URL = `${environment.API_URL}/posts`;

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
    return this.http.get<Article[]>(API_URL);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${API_URL}/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post(API_URL, article);
  }

  deleteArticle(article: Article) {
    return this.http.delete(`${API_URL}/${article.id}`);
  }

  updateArticle(id: number, article: Article) {
    return this.http.put(`${API_URL}/${id}`, article);
  }

}

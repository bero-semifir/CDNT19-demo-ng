import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Albums } from './albums';

const API_URL = `${environment.API_URL}/albums`;

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(API_URL);
  }

  getAlbumById(id: number): Observable<Albums> {
    return this.http.get<Albums>(`${API_URL}/${id}`)
  }

  updateAlbum(id: number, Album: Albums) {
    return this.http.put(`${API_URL}/${id}`, Album);
  }

  createAlbum(Album: Albums) {
    return this.http.post(API_URL, Album);
  }

  deleteAlbum(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
  }

}

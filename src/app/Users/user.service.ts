import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

const API_URL = `${environment.API_URL}/users`;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${id}`)
  }

  updateUser(id: number, user: User) {
    return this.http.put(`${API_URL}/users/${id}`, user);
  }

  createUser(user: User) {
    return this.http.post(API_URL, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${API_URL}/users/${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }

  updateUser(id: number, user: User) {
    return this.http.put(`http://localhost:3000/users/${id}`, user);
  }

  createUser(user: User) {
    return this.http.post("http://localhost:3000/users", user);
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

}

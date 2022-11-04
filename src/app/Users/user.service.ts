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
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  updateUser(id: number, user: User) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
  }

  createUser(user: User) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", user);
  }

  deleteUser(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}

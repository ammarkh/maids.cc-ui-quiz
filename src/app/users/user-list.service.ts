import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  listUrl = "https://reqres.in/api/users?page=";
  userUrl = "https://reqres.in/api/users/";

  constructor(private http: HttpClient) { }
  getList(page: Number) {
    return this.http.get(this.listUrl + page);
  }

  getUserById(userId: Number) {
    return this.http.get(this.userUrl + userId);
  }

}

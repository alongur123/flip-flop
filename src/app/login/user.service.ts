import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject(new User({}));
  public publicUser = this.user.asObservable();
  private allUsers = new BehaviorSubject([]);
  public publicAllUsers = this.allUsers.asObservable();
  url = "";

  constructor(private Http: HttpClient) { }

  logIn(wantedUser: User) {
    this.Http.get<User>(this.url).subscribe(x => this.user.next(x));
  }
  register(wantedUser: User) {
    this.Http.post<User>(this.url, wantedUser).subscribe(x => this.user.next(x));
  }
  getAll() {
    this.Http.get<User[]>(this.url).subscribe(x => this.allUsers.next(x));
  }
  deleteUser(user){
    this.Http.delete<User[]>(`${this.url}/:id=${user}`).subscribe(x => this.allUsers.next(x));
  }
}

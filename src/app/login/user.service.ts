import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { UserType } from 'src/models/userType.enum';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject(new User({}));
  public publicUser = this.user.asObservable();
  private allUsers = new BehaviorSubject([]);
  public publicAllUsers = this.allUsers.asObservable();
  private type = new BehaviorSubject<UserType>(UserType.notConnected);
  public publicType = this.type.asObservable();
  url = "";

  constructor(private Http: HttpClient) { }
  getType() {
    console.log(this.type.value);
    this.type.next(this.type.value);
  }
  logIn(wantedUser: User) {
    this.Http.get<User>(this.url).subscribe(x => {
      if (!x) {
        this.user.next(x);
        this.type.next(x.isAdmin ? UserType.Admin : UserType.notAdmin);
      }
    });
  }
  register(wantedUser: User) {
    this.Http.post<User>(this.url, wantedUser).subscribe(x => this.user.next(x));
  }
  getAll() {
    this.Http.get<User[]>(this.url).subscribe(x => this.allUsers.next(x));
  }
  deleteUser(user) {
    this.Http.delete<User[]>(`${this.url}/:id=${user}`).subscribe(x => this.allUsers.next(x));
  }
}

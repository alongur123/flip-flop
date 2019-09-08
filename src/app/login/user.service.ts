import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { UserType } from 'src/models/userType.enum';
import * as commands from '../socket/commands';
import { socket } from '../socket/socket';
import * as tel from '../socket/telemetries';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject(new User({}));
  public publicUser = this.user.asObservable();
  private allUsers = new BehaviorSubject<User[]>([]);
  public publicAllUsers = this.allUsers.asObservable();
  private type = new BehaviorSubject<UserType>(UserType.Admin);
  public publicType = this.type.asObservable();
  url = "";


  constructor(private Http: HttpClient, private router: Router) {
    // socket.on("TEL_GET_ALL_USERS", (res) => {
    //   let users = res.map(x => new User(x));
    //   console.log(users);
    //   this.allUsers.next(users);
    // });

  }
  getType() {
    this.type.next(this.type.value);
  }
  changeType(user: UserType) {
    this.type.next(user);
  }
  logIn(wantedUser: User) {
    console.log({ username: wantedUser.username, password: wantedUser.Password });
    socket.emit(commands.LOGIN, { username: wantedUser.username, password: wantedUser.Password });
    // this.Http.get<User>(this.url).subscribe(x => {
    //   if (!x) {
    //     this.user.next(x);
    //     this.type.next(x.isAdmin ? UserType.Admin : UserType.notAdmin);
    //   }
    // });
  }
  setUser(x) {
    this.user.next(x);
    this.changeType(x.isAdmin ? UserType.Admin : UserType.notAdmin);
  }
  register(wantedUser: User) {
    console.log(wantedUser);
    socket.emit(commands.INSERET_USER, wantedUser);
    socket.emit(commands.GET_ALL_USERS, {});
    // this.Http.post<User>(this.url, wantedUser).subscribe(x => this.user.next(x));
  }
  getAll() {
    socket.emit(commands.GET_ALL_USERS, {});
    // this.Http.get<User[]>(this.url).subscribe(x => this.allUsers.next(x));

    // this.allUsers.next([new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: true }),
    // new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: false }),
    // new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: false })]);
  }
  deleteUser(user) {
    console.log(user);
    socket.emit(commands.DELETE_USER, { id: user });
    // this.Http.delete<User[]>(`${this.url}/:id=${user}`).subscribe(x => this.allUsers.next(x));
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../user.service';
import { socket } from '../../socket/socket';
import * as tel from '../../socket/telemetries';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-UsersTable',
  templateUrl: './UsersTable.component.html',
  styleUrls: ['./UsersTable.component.css']
})
export class UsersTableComponent implements OnInit {

  private allUsers = new BehaviorSubject<User[]>([]);
  public publicAllUsers = this.allUsers.asObservable();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.publicAllUsers.subscribe(x => {
    //   this.Users = x;
    //   console.log(x);
    // });    
    socket.on(tel.TEL_GET_ALL_USERS, (res) => {
      console.log(res);
      let Resusers = res.map(x => new User(x));
      console.log(Resusers);
      this.allUsers.next(Resusers);
    });
    
    socket.on(tel.TEL_DELETE_USER, (res) => {
      console.log("delete");
      console.log(this.allUsers.value.filter(x => x.id !== res.id));
      this.allUsers.next(this.allUsers.value.filter(x => x.id !== res.id));
    });

    this.userService.getAll();
  }
  delete(user) {
    console.log(user);
    //this.allUsers.next(this.allUsers.value.filter(x => x.id !== 0));
    this.userService.deleteUser(user.id);
  }
}

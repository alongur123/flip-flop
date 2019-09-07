import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-UsersTable',
  templateUrl: './UsersTable.component.html',
  styleUrls: ['./UsersTable.component.css']
})
export class UsersTableComponent implements OnInit {

  Users: User[] = [new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: true }),
  new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: false }),
  new User({ firstName: "alon", lastName: "gur", Password: "11", isAdmin: false })];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.publicAllUsers.subscribe(x => this.Users = x);
    this.userService.getAll();
  }
  delete(user) {
    console.log(user)
  }
}
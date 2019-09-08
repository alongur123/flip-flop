import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login/user.service';
import { UserType } from 'src/models/userType.enum';
import { socket } from '../socket/socket';
import * as tel from '../socket/telemetries';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: UserType;
  notConnected = UserType.notConnected;
  Admin = UserType.Admin;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.publicType.subscribe(x => this.user = x);
    this.userService.getType();
    socket.on(tel.TEL_LOGIN, (res) => {
      if (res !== null) {
        console.log(res.isAdmin);
        this.userService.changeType(res.isAdmin ? UserType.Admin : UserType.notAdmin);
        this.userService.setUser(res);
        //this.router.navigate(['']);
      }
      
    });

  }
  logOut() {
    this.userService.changeType(UserType.notConnected);
    this.router.navigate(['/login']);
  }
}

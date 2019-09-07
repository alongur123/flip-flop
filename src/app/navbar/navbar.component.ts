import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login/user.service';
import { UserType } from 'src/models/userType.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: UserType;
  notConnected = UserType.notConnected;
  Admin = UserType.Admin;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.publicType.subscribe(x => this.user = x);
    this.userService.getType();

  }

}

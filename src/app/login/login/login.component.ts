import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';
import { socket } from '../../socket/socket';
import * as tel from '../../socket/telemetries';
import { UserType } from 'src/models/userType.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User({});
  userForm: FormGroup;
  errorMessage: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(this.user.username, [Validators.required]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.min(6)])
    });

    socket.on(tel.TEL_LOGIN, (res) => {
      if (res !== null) {
        console.log(res.isAdmin);
        //this.userService.changeType(res.isAdmin ? UserType.Admin : UserType.notAdmin);
        this.userService.setUser(res);
      }
      else {
        alert("user name or password incorrect");
      }
    });
  }
  onSubmit() {
    // this.userForm.reset();
    if (!this.userForm.valid) {
      this.errorMessage = "";
      Object.keys(this.userForm.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.userForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.errorMessage += key + ' ';
          });
        }
      });

      return;
    }
    this.userService.logIn(this.user);

  }
}

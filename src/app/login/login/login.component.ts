import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User({});
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      FirstName: new FormControl(this.user.firstName, [Validators.required]),
      LastName: new FormControl(this.user.lastName, [Validators.required]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.min(6)])
    });
  }
  onSubmit() {
    // this.userForm.reset();
    console.log(this.userForm.errors);
   }

}

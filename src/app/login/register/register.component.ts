import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User({});
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      FirstName: new FormControl(this.user.firstName, [Validators.required]),
      LastName: new FormControl(this.user.lastName, [Validators.required]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.min(6)]),
      ConfirmPassword: new FormControl(this.user.Password, [Validators.required, Validators.min(6)]),
    }, {validators: this.checkPasswords});

  }
  onSubmit() {
   // this.userForm.reset();
   console.log(this.userForm.errors);
  }
  reset() {
    this.userForm.reset();
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  console.log(group);
  let pass = group.controls.Password.value;
  let confirmPass = group.controls.ConfirmPassword.value;

  return pass === confirmPass ? null : { notSame: true };
}
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User({});
  userForm: FormGroup;
  errorMessage: string
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      FirstName: new FormControl(this.user.firstName, [Validators.required]),
      LastName: new FormControl(this.user.lastName, [Validators.required]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.min(6)])
    });
  }
  //TODO: logIn check server side
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
  }
}

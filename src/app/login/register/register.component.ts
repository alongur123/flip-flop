import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User({});
  userForm: FormGroup;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      FirstName: new FormControl(this.user.firstName, [Validators.required]),
      LastName: new FormControl(this.user.lastName, [Validators.required]),
      Password: new FormControl(this.user.Password, [Validators.required, Validators.min(6)]),
      username: new FormControl(this.user.username, [Validators.required]),
      ConfirmPassword: new FormControl(this.user.Password, [Validators.required, Validators.min(6)]),
    }, { validators: this.checkPasswords });

  }
  onSubmit() {
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
    
    this.userService.register(this.user);
    this.router.navigate(['/login']);
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

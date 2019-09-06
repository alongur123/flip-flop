import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UsersTableComponent } from './UsersTable/UsersTable.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent, UsersTableComponent]
})
export class LoginModuleModule { }

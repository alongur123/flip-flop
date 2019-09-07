import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComplainComponent } from './addComplain/addComplain.component';
import { ComplainComponent } from './complain/complain.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [ComplainComponent, AddComplainComponent],
  exports: [ComplainComponent, AddComplainComponent]
})
export class ComplainModuleModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Complain } from 'src/models/complain';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-addComplain',
  templateUrl: './addComplain.component.html',
  styleUrls: ['./addComplain.component.css']
})
export class AddComplainComponent implements OnInit {
  complain: Complain = new Complain({});
  complainForm: FormGroup;
  constructor(private complainService: ComplainService) { }

  ngOnInit() {
    this.complainForm = new FormGroup({
      Content: new FormControl(this.complain.content, [Validators.required])
    });
  }
  onSubmit() {
    if (this.complainForm.valid) {
      this.complainService.addCompalin(this.complain);
      this.complainForm.reset();
    }
  }
}

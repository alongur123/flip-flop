import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/models/complain';
import { User } from 'src/models/user';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  complains: Complain[] = [new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" }),
  new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" }),
  new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" })];

  constructor() { }

  ngOnInit() {
    console.log(this.complains);
  }
  delete(complain) {
    console.log(complain)
  }
  edit(complain){
    console.log(complain)
  }
}

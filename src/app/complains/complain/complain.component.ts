import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/models/complain';
import { User } from 'src/models/user';
import { ComplainService } from '../complain.service';
import * as tel from '../../socket/telemetries';
import { socket } from '../../socket/socket';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
  private allComplain = new BehaviorSubject<Complain[]>([]);
  public publicAllComplains = this.allComplain.asObservable();

  // complains: Complain[] = [new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" }),
  // new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" }),
  // new Complain({ user: new User({ firstName: "alon", lastName: "gur" }), content: "aaaaaaaa", comment: "bbbbbb" })];

  constructor(private complainService: ComplainService) { }

  ngOnInit() {
    socket.on(tel.TEL_GET_COMPLAINT, (res) => {
      console.log(res);
      let Resusers = res.map(x => new Complain(x));
      console.log(Resusers);
      this.allComplain.next(Resusers);
    });

    this.complainService.getAll();
  }
  delete(complain) {

  }
  edit(complain) {

  }
}

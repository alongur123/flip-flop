import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Complain } from 'src/models/complain';
import { HttpClient } from '@angular/common/http';
import * as commands from '../socket/commands';
import { socket } from '../socket/socket';
import * as tel from '../socket/telemetries';
import { ComplainStatus } from 'src/models/complainStatus.enum';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  // private user = new BehaviorSubject(new User({}));
  // public publicUser = this.user.asObservable();
  private allComplains = new BehaviorSubject([]);
  public publicAllComplains = this.allComplains.asObservable();
  url = "";

  constructor(private Http: HttpClient) { }
  getAll() {
    socket.emit(commands.GET_ALL_COMPLAINTS, {});
  }
  addCompalin(wantedComplain: Complain) {
    socket.emit(commands.INSERET_COMPLAINT, wantedComplain);
    //this.Http.post<Complain>(this.url, wantedComplain).subscribe(x => this.allComplains.next(this.allComplains.value.concat([x])));
  }

  checkComplain(wantedComplain: Complain) {
    wantedComplain.status = ComplainStatus.finished;
    socket.emit(commands.UPDATE_COMPLAINT, wantedComplain);
    // this.Http.put<Complain>(this.url, wantedComplain).subscribe(x => this.allComplains.next(x));
  }
}

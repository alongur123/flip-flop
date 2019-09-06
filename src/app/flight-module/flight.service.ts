import { Injectable } from '@angular/core';
import { Flight } from 'src/models/flight';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TicketesHistory } from 'src/models/ticketesHistory';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  public currentFlight: Flight;

  // private user = new BehaviorSubject(new User({}));
  // public publicUser = this.user.asObservable();
  private allFlights = new BehaviorSubject([]);
  public publicAllFlights = this.allFlights.asObservable();
  private history = new BehaviorSubject([]);
  public publicHistory = this.history.asObservable();

  url = "";
  urlHistory = "";

  constructor(private Http: HttpClient, private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '1450976715027167',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }
  share() {

    let params: UIParams = {
      href: 'http://github.com/zyra/ngx-facebook',
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));

  }
  getAll() {
    this.Http.get<Flight[]>(this.url).subscribe(x => this.allFlights.next(x));
  }
  addFlight(wantedFlight: Flight) {
    this.Http.post<Flight>(this.url, wantedFlight).subscribe(x => this.allFlights.next(this.allFlights.value.concat([x])));
  }
  //Todo
  DeleteFlight() {
    // this.Http.delete<Flight[]>(this.url).subscribe(x => this.allUsers.next(x));
  }
  UpdateFlight(wantedFlight: Flight) {
    // this.Http.put<Flight>(this.url, wantedFlight).subscribe(x => this.allFlights.next(x));
  }
  getHistory() {
    this.Http.get<TicketesHistory[]>(this.urlHistory).subscribe(x => this.history.next(this.history.value.concat(x)));
  }
  //TODO: add targets to new flight form
  getTargets() {

  }
}

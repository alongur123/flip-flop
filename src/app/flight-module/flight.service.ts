import { Injectable } from '@angular/core';
import { Flight } from 'src/models/flight';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TicketesHistory } from 'src/models/ticketesHistory';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
import KNN from 'ml-knn';
import { socket } from '../socket/socket';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  public currentFlight: Flight;

  // private user = new BehaviorSubject(new User({}));
  // public publicUser = this.user.asObservable();
  private allFlights = new BehaviorSubject<Flight[]>([]);
  public publicAllFlights = this.allFlights.asObservable();
  private history = new BehaviorSubject<TicketesHistory[]>([]);
  public publicHistory = this.history.asObservable();

  url = "";
  urlHistory = "";

  constructor(private Http: HttpClient, private fb: FacebookService) {
    socket.on("TEL_GET_ALL_FILGHT_TICKETS_DETAILS", (res) => {
      let users = res.map(x => new Flight(x));
      console.log(users);
      this.allFlights.next(users);
    });
    socket.on("TEL_GET_ALL_HISTORIES_DETAILS", (res) => {
      let users = res.map(x => new TicketesHistory(x));
      console.log(users);
      this.history.next(users);
    });
    // socket.on("TEL_GET_ALL_USERS", (res) => {
    //   let users = res.map(x => new User(x));
    //   console.log(users);
    //   this.allUsers.next(users);
    // });

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
    socket.emit("GET_ALL_FILGHT_TICKETS_DETAILS", {});
    // this.Http.get<Flight[]>(this.url).subscribe(x => this.allFlights.next(x));
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
    socket.emit("GET_ALL_HISTORIES_DETAILS", {});

  //  this.Http.get<TicketesHistory[]>(this.urlHistory).subscribe(x => this.history.next(this.history.value.concat(x)));
  }
  //TODO: add targets to new flight form
  getTargets() {

  }

  // Get a suggestion by user history of flight destination and price
  //TODO: 
  getSuggestion() {
    // var dataset = [
    //   [1, 100],
    //   [0, 1],
    //   [1, 1],
    //   [2, 2],
    //   [1, 2],
    //   [2, 50]
    // ];
    var dataset = this.history.value.map((x: TicketesHistory) => [x.flight.target.country.idNumber, x.flight.Price]);
    var predictions = [1, 0, 0, 0, 0, 1];
    var knn = new KNN(dataset, predictions, { k: 2 });
    var dataset = [[2, 10]];

    var ans = knn.predict(dataset);
    console.log(ans);
  }
}

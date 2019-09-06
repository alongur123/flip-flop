import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Complain } from 'src/models/complain';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  // private user = new BehaviorSubject(new User({}));
  // public publicUser = this.user.asObservable();
  private allFlights = new BehaviorSubject([]);
  public publicAllFlights = this.allFlights.asObservable();
  url = "";

  constructor(private Http: HttpClient) { }
  getAll() {
    this.Http.get<Complain[]>(this.url).subscribe(x => this.allFlights.next(x));
  }
  addFlight(wantedFlight: Complain) {
    this.Http.post<Complain>(this.url, wantedFlight).subscribe(x => this.allFlights.next(this.allFlights.value.concat([x])));
  }
  //Todo
  DeleteFlight() {
   // this.Http.delete<Complain[]>(this.url).subscribe(x => this.allUsers.next(x));
  }
  UpdateFlight(wantedFlight: Complain) {
    // this.Http.put<Complain>(this.url, wantedFlight).subscribe(x => this.allFlights.next(x));
  }
}

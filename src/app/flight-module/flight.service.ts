import { Injectable } from '@angular/core';
import { Flight } from 'src/models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  public currentFlight: Flight;

constructor() { }

}

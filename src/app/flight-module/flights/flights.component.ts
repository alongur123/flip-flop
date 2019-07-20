import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../models/flight';
import { Target } from 'src/models/target';
import { Country } from 'src/models/country';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  constructor() { }

  ngOnInit() {
    let a = new Flight({
      FlightNumber: "aa", target: new Target({
        cityName: "new york",
        country: new Country({ name: "usa" })
      })
    });
    this.flights.push(a);
    this.flights.push(a);
    this.flights.push(a);
    this.flights.push(a);
    this.flights.push(a);
  }

}

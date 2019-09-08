import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../models/flight';
import { Target } from 'src/models/target';
import { Country } from 'src/models/country';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {
    // let a = new Flight({
    //   FlightNumber: "aa", target: new Target({
    //     cityName: "new york",
    //     country: new Country({ name: "usa" })
    //   })
    // });
    // this.flights.push(a);
    // this.flights.push(a);
    // this.flights.push(a);
    // this.flights.push(a);
    // this.flights.push(a);
    // this.flightService.getSuggestion();
    this.flightService.publicAllFlights.subscribe(x => {
    this.flights = x;
    console.log(this.flights);
    });
    this.flightService.getAll();
  }
  clicked(flight) {
    this.flightService.currentFlight = flight;
    this.router.navigateByUrl('/flight');
  }
}

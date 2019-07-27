import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/models/flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flight: Flight;
  constructor(private flightService:FlightService) { }

  ngOnInit() {
    this.flight = this.flightService.currentFlight;
  }


}

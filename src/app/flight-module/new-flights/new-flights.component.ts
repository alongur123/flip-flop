import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../../models/flight';
import { Department } from '../../../models/department.enum';
@Component({
  selector: 'app-new-flights',
  templateUrl: './new-flights.component.html',
  styleUrls: ['./new-flights.component.css']
})
export class NewFlightsComponent implements OnInit {
  flight: Flight = new Flight({});
  departmentValue = Department;
  flightForm: FormGroup;
  ngOnInit(): void {
    this.flightForm = new FormGroup({
      FlightNumber: new FormControl(this.flight.FlightNumber, [Validators.required]),
      department: new FormControl(this.flight.department, [Validators.required]),
      cancelFee: new FormControl(this.flight.cancelFee, [Validators.required, Validators.min(0)]),
      Price: new FormControl(this.flight.Price, [Validators.required, Validators.min(0)]),
      Food: new FormControl(this.flight.Food),
      Baggage: new FormControl(this.flight.Baggage),
      target: new FormControl(this.flight.target, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.flight);
    this.flightForm.reset();
  }
  onReset() {
    this.flightForm.reset();
  }
  constructor() { }
  DeparmentKeys(): Array<string> {
    let keys = Object.keys(this.departmentValue);
    return keys.slice(keys.length / 2);
  }
}

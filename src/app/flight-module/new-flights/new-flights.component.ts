import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Flight } from '../../../models/flight';
import { Department } from '../../../models/department.enum';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-new-flights',
  templateUrl: './new-flights.component.html',
  styleUrls: ['./new-flights.component.css']
})
export class NewFlightsComponent implements OnInit {
  flight: Flight = new Flight({});
  departmentValue = Department;
  flightForm: FormGroup;
  errorMessage: string;
  ngOnInit(): void {



    this.flightForm = new FormGroup({
      FlightNumber: new FormControl(this.flight.FlightNumber, [Validators.required]),
      department: new FormControl(this.flight.department, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      cancelFee: new FormControl(this.flight.cancelFee, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]),
      Price: new FormControl(this.flight.Price, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]),
      Food: new FormControl(this.flight.Food),
      Baggage: new FormControl(this.flight.Baggage),
      target: new FormControl(this.flight.target, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    });
  }
  onSubmit() {
    if (!this.flightForm.valid) {
      this.errorMessage = "";
      Object.keys(this.flightForm.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.flightForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.errorMessage += key + ' ';
          });
        }
      });

      return;
    }

    console.log(this.flight);
    this.flightService.share();
    console.log("hhh");
    this.flightService.addFlight(this.flight);
    this.flightForm.reset();
  }
  onReset() {
    this.flightForm.reset();
  }
  constructor(private flightService: FlightService) { }
  DeparmentKeys(): Array<string> {
    let keys = Object.keys(this.departmentValue);
    return keys.slice(keys.length / 2);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFlightsComponent } from './new-flights/new-flights.component';
import { FlightsComponent } from './flights/flights.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    NewFlightsComponent,
    FlightsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule

  ],
  exports: [NewFlightsComponent,
    FlightsComponent]
})
export class FlightModuleModule { }

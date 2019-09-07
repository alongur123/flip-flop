import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFlightsComponent } from './new-flights/new-flights.component';
import { FlightsComponent } from './flights/flights.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { FlightComponent } from './flight/flight.component';
import { RouterModule } from '@angular/router';
import { FlightHistoryComponent } from './flightHistory/flightHistory.component';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    NewFlightsComponent,
    FlightsComponent,
    FlightComponent,
  FlightHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule,
    HttpClientModule,
    FacebookModule.forRoot(),    
  ],
  exports: [NewFlightsComponent,
    FlightsComponent,
    FlightHistoryComponent]
})
export class FlightModuleModule { }

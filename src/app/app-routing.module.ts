import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flight-module/flights/flights.component';
import { NewFlightsComponent } from './flight-module/new-flights/new-flights.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [{ path: 'newFlights', component: NewFlightsComponent, pathMatch: 'full' },
{ path: 'flight', component: FlightsComponent, pathMatch: 'full' },
{ path: 'contact', component: ContactComponent, pathMatch: 'full' },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'about', component: AboutComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flight-module/flights/flights.component';
import { NewFlightsComponent } from './flight-module/new-flights/new-flights.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComplainComponent } from './complains/complain/complain.component';
import { AddComplainComponent } from './complains/addComplain/addComplain.component';
import { FlightComponent } from './flight-module/flight/flight.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { FlightHistoryComponent } from './flight-module/flightHistory/flightHistory.component';
import { UsersTableComponent } from './login/UsersTable/UsersTable.component';
import { logInGuard } from './app.guard';
import { AdminGuard } from './admin.guard';


const routes: Routes = [{ path: 'newFlights', component: NewFlightsComponent, pathMatch: 'full' },
{ path: 'flights', component: FlightsComponent, pathMatch: 'full', canActivate: [logInGuard] },
{ path: 'contact', component: ContactComponent, pathMatch: 'full' },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'about', component: AboutComponent, pathMatch: 'full' },
{ path: 'complains', component: ComplainComponent, pathMatch: 'full', canActivate: [logInGuard, AdminGuard] },
{ path: 'AddComplain', component: AddComplainComponent, pathMatch: 'full', canActivate: [logInGuard] },
{ path: 'flight', component: FlightComponent, pathMatch: 'full', canActivate: [logInGuard] },
{ path: 'flightHistory', component: FlightHistoryComponent, pathMatch: 'full', canActivate: [logInGuard, AdminGuard] },
{ path: 'UsersTable', component: UsersTableComponent, pathMatch: 'full', canActivate: [logInGuard, AdminGuard] },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'register', component: RegisterComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { FlightModuleModule } from "./flight-module/flight-module.module";
import { ContactComponent } from './contact/contact.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
      HomeComponent,
      ContactComponent
   ],
   imports: [
      BrowserModule,
      AgmCoreModule.forRoot({apiKey: "AIzaSyCS0bCswAI_mFe5RfrVe2pU4sL3mPQIXrA"}),
      AppRoutingModule,
      MatMenuModule,
      BrowserAnimationsModule,
      FlightModuleModule,
      MatCardModule,
      MatCheckboxModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Weather } from 'src/models/weather';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private weather = new BehaviorSubject<Weather[]>([]);
  public publicWeather = this.weather.asObservable();

  constructor(private http: HttpClient) { }
  searchWeatherInfo(city: string) {
    const key = "8c8ce126a0885c20893c85532db38c97";
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`).
      subscribe((x: any) => this.weather.next(this.weather.value.concat([new Weather({cityName: city, temp: x.main.temp})])));

  }
}

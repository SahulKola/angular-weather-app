import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private weatherSubject = new Subject<any>();
  private forecastSubject = new Subject<any>();
  setData(city: string): void {
    const value = this.http.get(this.baseUrl, {
      params: new HttpParams()
        .set('q', city)
        .set('appid', '98d35acd685c7154adc498df5a2c3195'),
    });
    this.weatherSubject.next(value);
  }
  getData(): Observable<any> {
    return this.weatherSubject.asObservable();
  }
  setForecastData(city: string): void {
    const value = this.http.get(this.forecastBaseUrl, {
      params: new HttpParams()
        .set('q', city)
        .set('appid', '98d35acd685c7154adc498df5a2c3195'),
    });
    this.forecastSubject.next(value);
  }

  getForecastData(): Observable<any> {
    return this.forecastSubject.asObservable();
  }
}

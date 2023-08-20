import { WD } from './../../data';
import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent {
  temp: number = 0;
  country: string = '';
  city: string = '';
  long: number = 0;
  lat: number = 0;
  dateTime: number = 0;
  subscription: Subscription | undefined;
  constructor(private weather: WeatherService) {
    this.subscription = this.weather.getData().subscribe((value) =>
      value.subscribe((data: WD) => {
        this.temp = data.main.temp;
        this.country = data.sys.country;
        this.city = data.name;
        this.long = data.coord.lon;
        this.lat = data.coord.lat;
        this.dateTime = data.dt;
      })
    );
  }
}

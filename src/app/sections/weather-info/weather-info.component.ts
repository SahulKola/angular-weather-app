import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WD } from 'src/app/data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent {
  main: string = '';
  desc: string = '';
  wind: string = '';
  pressure: string = '';
  humidity: string = '';
  img: string = '';
  subs: Subscription | undefined;
  constructor(private weather: WeatherService) {
    this.subs = this.weather.getData().subscribe((value: any) => {
      value.subscribe((data: WD) => {
        this.main = data.weather[0].main;
        this.desc = data.weather[0].description;
        this.wind = `Wind: ${data.wind.speed} m/s`;
        this.pressure = `Pressure: ${data.main.pressure} hPa`;
        this.humidity = `Humidity: ${data.main.humidity} %`;
        this.img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
    });
  }
}

import { WD } from './../../data';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss'],
})
export class AstroComponent {
  sunrise: number = 0;
  sunset: number = 0;
  high: number = 0;
  low: number = 0;
  subs: Subscription | undefined;
  constructor(private weather: WeatherService) {
    this.subs = this.weather.getData().subscribe((value: any) =>
      value.subscribe((data: WD) => {
        {
          this.sunrise = data.sys.sunrise;
          this.sunset = data.sys.sunset;
          this.high = data.main.temp_max;
          this.low = data.main.temp_min;
        }
      })
    );
  }
}

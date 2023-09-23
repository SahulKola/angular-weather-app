import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements AfterViewInit {
  text: string = '';
  constructor(private weather: WeatherService) {}

  ngAfterViewInit(): void {
    this.weather.setData('Hyderabad');
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.weather.setData(this.text);
    this.weather.setForecastData(this.text);
    this.text = '';
    form.resetForm();
  }
}

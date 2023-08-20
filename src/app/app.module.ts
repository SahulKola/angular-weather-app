import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { AstroComponent } from './sections/astro/astro.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LocationInfoComponent } from './sections/location-info/location-info.component';
import { WeatherInfoComponent } from './sections/weather-info/weather-info.component';
import { TemperatureConverterPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    ForecastItemComponent,
    AstroComponent,
    SearchbarComponent,
    LocationInfoComponent,
    WeatherInfoComponent,
    TemperatureConverterPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, Input, AfterContentChecked } from '@angular/core';
import { FD } from 'src/app/data';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss'],
})
export class ForecastItemComponent implements AfterContentChecked {
  @Input() data: FD | undefined;
  day: string = '';
  ngAfterContentChecked(): void {}
}

import { AfterContentInit, Component, Input } from '@angular/core';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements AfterContentInit {
  @Input() icon: string = '';
  @Input() text: string | number = '';
  img = '';
  ngAfterContentInit(): void {
    this.img = `assets/svg/${this.icon}.svg`;
  }
}

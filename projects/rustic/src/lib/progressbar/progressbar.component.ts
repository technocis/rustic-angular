import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
})
export class ProgressbarComponent {
  @Input() indefinite?: boolean = false;
  @Input() rounded?: boolean = false;
  @Input() value?: number = 0;
  @Input() color?: 'primary' | 'secondary' | 'success' | 'warning' = 'primary';
  @Input() size?: 'small' | 'default' | 'large' = 'default';

  constructor() {}
}

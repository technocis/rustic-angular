import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'warning' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  constructor() {}
}

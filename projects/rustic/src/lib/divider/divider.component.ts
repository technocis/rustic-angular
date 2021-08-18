import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
})
export class DividerComponent {
  @Input() type: 'horizontal' | 'vertical' = 'horizontal';

  constructor() {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input() type: 'default' | 'ellipsis' = 'default';
  @Input() text: string = '';
  @Input() textAlign: 'horizontal' | 'vertical' = 'horizontal';

  constructor() {}
}

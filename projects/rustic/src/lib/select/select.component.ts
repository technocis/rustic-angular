import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';

  constructor() {}
}

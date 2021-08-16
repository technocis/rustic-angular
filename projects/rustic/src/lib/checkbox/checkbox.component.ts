import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() label: string = '';

  constructor() {}
}

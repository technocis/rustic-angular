import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';
  constructor() {}
}

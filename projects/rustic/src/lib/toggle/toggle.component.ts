import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() label: string = '';
  constructor() {}
}

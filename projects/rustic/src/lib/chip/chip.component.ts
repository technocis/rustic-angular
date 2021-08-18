import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() text: string = '';
  @Input() showClose: boolean = false;
  constructor() {}
}

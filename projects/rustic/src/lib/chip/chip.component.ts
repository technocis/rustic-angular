import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent implements OnInit {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() text: string = '';
  @Input() showClose: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}

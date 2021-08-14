import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'primary';
  @Input() size: string = 'medium';

  constructor() {}

  ngOnInit(): void {}
}

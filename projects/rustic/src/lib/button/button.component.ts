import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'primary' | 'secondary' | 'warning' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}

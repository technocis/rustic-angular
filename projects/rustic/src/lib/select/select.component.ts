import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() color: 'primary' | 'secondary' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}

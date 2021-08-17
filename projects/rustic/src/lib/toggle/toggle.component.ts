import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}
}

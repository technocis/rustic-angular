import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cis-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() hover: boolean = true;

  constructor() {}
}

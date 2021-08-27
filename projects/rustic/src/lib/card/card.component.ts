import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'cis-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() actions: TemplateRef<any>;

  constructor() {}
}

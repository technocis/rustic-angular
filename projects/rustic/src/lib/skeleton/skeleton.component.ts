import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent {
  @Input() type: 'text' | 'image' = 'text';
  @Input() lines = 1;
  constructor() {}
  public counter(i: number) {
    return new Array(i);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cis-title',
  template: '<ng-content></ng-content>',
  styles: [],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

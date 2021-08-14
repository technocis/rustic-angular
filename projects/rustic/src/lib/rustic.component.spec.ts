import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RusticComponent } from './rustic.component';

describe('RusticComponent', () => {
  let component: RusticComponent;
  let fixture: ComponentFixture<RusticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RusticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RusticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

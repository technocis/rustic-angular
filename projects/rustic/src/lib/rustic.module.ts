import { NgModule } from '@angular/core';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    RusticComponent,
    ButtonComponent,
    CheckboxComponent,
    SpinnerComponent,
  ],
  imports: [],
  exports: [
    RusticComponent,
    ButtonComponent,
    CheckboxComponent,
    SpinnerComponent,
  ],
})
export class RusticModule {}

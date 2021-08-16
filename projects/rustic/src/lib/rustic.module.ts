import { NgModule } from '@angular/core';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [RusticComponent, ButtonComponent, CheckboxComponent],
  imports: [],
  exports: [RusticComponent, ButtonComponent, CheckboxComponent],
})
export class RusticModule {}

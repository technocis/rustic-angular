import { NgModule } from '@angular/core';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    RusticComponent,
    ButtonComponent,
    CheckboxComponent,
    SpinnerComponent,
    ListItemComponent,
    ListComponent,
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

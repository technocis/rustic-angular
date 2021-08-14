import { NgModule } from '@angular/core';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [RusticComponent, ButtonComponent],
  imports: [],
  exports: [RusticComponent, ButtonComponent],
})
export class RusticModule {}

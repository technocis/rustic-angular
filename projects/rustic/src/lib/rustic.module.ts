import { NgModule } from '@angular/core';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { DividerComponent } from './divider/divider.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [
    RusticComponent,
    ButtonComponent,
    CheckboxComponent,
    SpinnerComponent,
    ListItemComponent,
    ListComponent,
    RadioButtonComponent,
    ChipComponent,
    ToggleComponent,
    TitleComponent,
    SubtitleComponent,
    DividerComponent,
    SkeletonComponent,
  ],
  imports: [CommonModule],
  exports: [
    RusticComponent,
    ButtonComponent,
    CheckboxComponent,
    SpinnerComponent,
    ListItemComponent,
    ListComponent,
    RadioButtonComponent,
  ],
})
export class RusticModule {}

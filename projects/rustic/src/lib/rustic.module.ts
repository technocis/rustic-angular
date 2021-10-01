import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RusticComponent } from './rustic.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { ChipComponent } from './chip/chip.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { DividerComponent } from './divider/divider.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PrefixComponent } from './prefix/prefix.component';
import { SuffixComponent } from './suffix/suffix.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { CardComponent } from './card/card.component';

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
    ProgressbarComponent,
    PrefixComponent,
    SuffixComponent,
    InputComponent,
    SelectComponent,
    CardComponent,
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
    ChipComponent,
    ToggleComponent,
    TitleComponent,
    SubtitleComponent,
    DividerComponent,
    SkeletonComponent,
    ProgressbarComponent,
    PrefixComponent,
    SuffixComponent,
    InputComponent,
    SelectComponent,
    CardComponent,
  ],
})
export class RusticModule {}

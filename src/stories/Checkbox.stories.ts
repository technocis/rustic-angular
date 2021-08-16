// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from '../../projects/rustic/src/lib/checkbox/checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: {
    propInput: {
      label: args.label,
    },
  },
  template: `<cis-checkbox [label]="propInput.label"><input type="checkbox"></cis-checkbox>`,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'I Agree to the Terms and Conditions',
};

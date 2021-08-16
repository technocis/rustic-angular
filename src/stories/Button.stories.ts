// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../../projects/rustic/src/lib/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    propInput: {
      type: args.type,
      size: args.size,
    },
  },
  template: `<cis-button [type]="propInput.type" [size]="propInput.size"> Hello World </cis-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: 'medium',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  size: 'medium',
};

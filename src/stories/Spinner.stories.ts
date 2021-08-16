// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpinnerComponent } from '../../projects/rustic/src/lib/spinner/spinner.component';

export default {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  argTypes: {
    type: {
      options: ['default', 'ellipsis'],
      control: { type: 'radio' },
    },
    textAlign: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
  props: {
    propInput: {
      type: args.type,
      text: args.text,
      textAlign: args.textAlign,
    },
  },
  template: `<cis-spinner [type]="propInput.type" [text]="propInput.text" [textAlign]="propInput.textAlign"></cis-spinner>`,
});

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  textAlign: 'horizontal',
  text: 'Loading',
};

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  type: 'ellipsis',
  textAlign: 'horizontal',
  text: 'Loading',
};

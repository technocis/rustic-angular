// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListItemComponent } from '../../projects/rustic/src/lib/list-item/list-item.component';

export default {
  title: 'Components/List Item',
  component: ListItemComponent,
} as Meta;

const Template: Story<ListItemComponent> = (args: ListItemComponent) => ({
  props: {
    propInput: {
      hover: true,
    },
  },
  template: `<cis-list-item>
    <cis-title>List Item 1</cis-title>
  </cis-list-item>`,
});

const SubTemplate: Story<ListItemComponent> = (args: ListItemComponent) => ({
  props: {
    propInput: {
      hover: true,
    },
  },
  template: `<cis-list-item>
    <cis-title>List Item</cis-title>
    <cis-subtitle>With Subtitle Here</cis-subtitle>
  </cis-list-item>`,
});

export const Default = Template.bind({});
Default.args = {
  hover: true,
};

export const WithSubtitle = SubTemplate.bind({});
WithSubtitle.args = {
  hover: true,
};

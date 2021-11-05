import { Meta, Story } from '@storybook/react';

import { Menu, props } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
} as Meta<props>;

export const Default: Story<props> = (args) => <Menu {...args} />;

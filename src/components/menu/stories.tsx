import { Meta, Story } from '@storybook/react';

import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
};

export const Default: Story = (args) => <Menu {...args} />;

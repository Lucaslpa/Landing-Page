import { Meta, Story } from '@storybook/react';

import { Verticals } from '.';

export default {
  title: 'Verticals',
  component: Verticals,
};

export const Default: Story = (args) => <Verticals {...args} />;

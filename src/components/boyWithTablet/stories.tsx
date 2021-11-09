import { Meta, Story } from '@storybook/react';

import { BoyWithTablet } from '.';

export default {
  title: 'BoyWithTablet',
  component: BoyWithTablet,
  args: { text: 'Botão', ArrowRight: false, colors: 'light', size: 'xBig' },
};

export const Default: Story = (args) => <BoyWithTablet {...args} />;

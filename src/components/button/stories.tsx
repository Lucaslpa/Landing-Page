import { Meta, Story } from '@storybook/react';

import { Button, props } from '.';

export default {
  title: 'Button',
  component: Button,
  args: { text: 'Botão', ArrowRight: false, colors: 'light', size: 'xBig' },
};

export const Default: Story<props> = (args) => <Button {...args} />;

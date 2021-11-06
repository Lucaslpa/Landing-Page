import { Meta, Story } from '@storybook/react';

import { Links, props } from '.';

export default {
  title: 'Links',
  component: Links,
  args: { links: ['link 1', 'link 2'], title: 'Links' },
};

export const Default: Story<props> = (args) => <Links {...args} />;

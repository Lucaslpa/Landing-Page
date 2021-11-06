import { Meta, Story } from '@storybook/react';

import { Plano, props } from '.';

export default {
  title: 'Plano',
  component: Plano,
  args: {
    PlanoName: 'Plano recomendado',
    accessTime: '1 ano',
    color: 'dark',
    payTimes: 'por ano',
    totalValueWithoutDiscount: 40,
  },
};

export const Default: Story<props> = (args) => <Plano {...args} />;

import { Meta, Story } from '@storybook/react';

import { Plano, props } from '.';

export default {
  title: 'Plano',
  component: Plano,
  args: {
    PlanoName: 'Plano recomendado',
    accessTime: '1 ano',
    color: 'dark',
    payTimes: 'ano',
    totalValueWithoutDiscount: 40,
    advantages: ['qualquer vantagem'],

    message: 'menos meu',
  },
};

export const Default: Story<props> = (args) => <Plano {...args} />;

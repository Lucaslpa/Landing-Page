import { Meta, Story } from '@storybook/react';

import { Text, props } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    text: 'Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.',
    title: 'Matemática de um jeito fácil!',
  },
};

export const Default: Story<props> = (args) => <Text {...args} />;

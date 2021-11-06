import { Meta, Story } from '@storybook/react';
import Lucas from 'assets/lucas.png';

import { Review, props } from '.';

export default {
  title: 'Review',
  component: Review,
  args: {
    reviewText: 'alguma review',
    reviewerDescription: 'review descript',
    reviewerName: 'lUCAS',
    img: Lucas,
  },
};

export const Default: Story<props> = (args) => <Review {...args} />;

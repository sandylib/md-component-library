import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Body } from './Body';
import { ParagraphProps } from './interfaces';

export default {
  title: 'Text/Body',
  component: Body,
} as Meta;

export const All: Story<ParagraphProps> = args => {
  return <Body {...args}>Enter your details</Body>;
};
All.args = {
  textAlign: 'left',
  fontSize: 16,
  fontWeight: 'regular'
};

All.argTypes = {
  textAlign: {
    control: {
      type: 'select',
      options: ['left', 'center', 'right']
    }
  },
  fontSize: {
    control: {
      type: 'number'
    }
  },
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};

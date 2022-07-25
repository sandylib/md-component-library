import { Meta, Story } from '@storybook/react';
import React from 'react';
import Heading, { BaseComponent } from './Heading';
import { HeaderProps } from './interfaces';


export default {
  title: 'Text/Heading',
  component: BaseComponent
} as Meta<HeaderProps>;

export const H1: Story<HeaderProps> = args => {
  return <Heading.H1 {...args}>Enter your details</Heading.H1>;
};
H1.args = {
  fontWeight: 'bold'
};
H1.argTypes = {
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};

export const H2: Story<HeaderProps> = args => {
  return <Heading.H2 {...args}>Enter your details</Heading.H2>;
};
H2.args = {
  fontWeight: 'bold'
};
H2.argTypes = {
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};

export const H3: Story<HeaderProps> = args => {
  return <Heading.H3 {...args}>Enter your details</Heading.H3>;
};
H3.args = {
  fontWeight: 'bold'
};
H3.argTypes = {
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};


export const H4: Story<HeaderProps> = args => {
  return <Heading.H4 {...args}>Enter your details</Heading.H4>;
};
H4.args = {
  fontWeight: 'bold'
};
H4.argTypes = {
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};

export const H5: Story<HeaderProps> = args => {
  return <Heading.H5 {...args}>Enter your details</Heading.H5>;
};
H5.args = {
  fontWeight: 'bold'
};
H5.argTypes = {
  fontWeight: {
    control: {
      type: 'select',
      options: ['bold', 'regular']
    }
  }
};

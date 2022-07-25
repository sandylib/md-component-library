import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Link } from './Link';
import { LinkProps } from './interfaces';

export default {
  title: 'Text/Link',
  component: Link,
} as Meta;

export const All: Story<LinkProps> = args => {
  return <Link {...args} />;
};
All.args = {
  value: 'Contact',
  href: 'https://app.test.medirecords.com',
  target: '_blank',
};
All.argTypes = {
  onClick: { action: 'click ' },
  showExtraLink: { control: 'boolean' }
};

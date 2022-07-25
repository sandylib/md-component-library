// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-managerjs

import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  panelPosition: 'bottom',
  theme
});

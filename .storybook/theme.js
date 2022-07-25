import { create } from '@storybook/theming/create';

import pkg from '../package.json'

// For production deployment, increment the version by '1', as the rollup script and publish to Nexus will be followed after the storybook build script
const version = process.env.NODE_ENV === 'development' ? pkg.version : pkg.version + 1;

export default create({
  base: 'light',
  brandTitle: `MediRecords Component Library Version ${version}`,
  brandImage: 'https://app.test.medirecords.com/images/MR-Logo-vector-land.svg',
});

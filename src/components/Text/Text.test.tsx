import React from 'react';
import * as ReactDOM from 'react-dom';
import { All as Body } from './Body.stories';
import { H1,H2, H3, H4, H5} from './Heading.stories';
import { All  as Link } from './Link.stories';

describe('Text', () => {
  it('render the body without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H1 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H1 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H2 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H3 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H3 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H4 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H4 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render H5 without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H5 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render Link without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
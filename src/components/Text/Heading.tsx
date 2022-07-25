import styled, { css } from 'styled-components';

import { HeaderProps } from './interfaces';

export const HeaderStyles = css<HeaderProps>`
  font-weight: ${props => props.fontWeight || 'normal'};
  color: #7d7d7d;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;
export const BaseComponent = styled.div<HeaderProps>`
  ${HeaderStyles};
`;

const H1 = styled(BaseComponent).attrs({
  as: 'h1'
})`
  font-size: 24px;
  line-height: 48px;
  letter-spacing:1px;
`;

const H2 = styled(BaseComponent).attrs({
  as: 'h2'
})`
  font-size: 16px;
  line-height: 24px;
  letter-spacing:0;
`;

const H3 = styled(BaseComponent).attrs({
  as: 'h3'
})`
  font-size: 14px;
  line-height: 18px;
  letter-spacing:0.25px;
`;

const H4 = styled(BaseComponent).attrs({
  as: 'h4'
})`
  font-size: 12px;
  letter-spacing:0.25px;
`;

const H5 = styled(BaseComponent).attrs({
  as: 'h5'
})`
  font-size: 10px;
  line-height: 16px;
  letter-spacing:0.5px;
`;

export default {
  H1,
  H2,
  H3,
  H4,
  H5
};

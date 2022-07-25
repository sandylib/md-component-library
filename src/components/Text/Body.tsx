import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

import { ParagraphProps } from './interfaces';

const sharedStyles = css<ParagraphProps>`
  font-size: 12px;
  letter-spacing: 0.25px;
  line-height: 18px;
`;

export const Body = styled.p<ParagraphProps>`
  ${sharedStyles};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || '12'}px;
  text-align: ${props => props.textAlign || 'inherit'};
  color: ${props => (props.color || colors.text)};
`;

export default Body;
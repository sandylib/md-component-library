import React from 'react';
import styled from 'styled-components';

import colors from "../../utils/colors"

import { LinkProps } from './interfaces';

const StyledLink = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.link};
  text-decoration: underline;

  :hover,
  :active,
  :focus {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    value,
    href = '#',
    children,
    target = '_blank',
    ...props
  },
  ref
) {
  return (
    <StyledLink
      href={href}
      {...props}
      target={target}
      ref={ref}
      // See https://medium.com/sedeo/how-to-fix-target-blank-a-security-and-performance-issue-in-web-pages-2118eba1ce2f
      {...(target === '_blank' ? { rel: 'noopener noreferrer' } : {})}>
      {children || value}
    </StyledLink>
  );
});

export default Link;

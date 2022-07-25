import { createGlobalStyle, css } from 'styled-components';

const lightTheme = `
  --mdr-color: #7d7d7d;
  --mdr-border-color: #d1d1d1;
  --mdr-heading-color: #007BFF;

  --font-family: 'Open Sans', Arial, Helvetica, san-serif;
`;

const darkTheme = `
  --mdr-color: #ddd;
  --mdr-border-color: #444;

  --font-family: 'Open Sans', Arial, Helvetica, san-serif;
`;

export const StyledGlobalCss = css`
 
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url(../assets/fonts/open-sans-v27-latin-regular.eot); /* IE9 Compat Modes */
  url(../assets/fonts/open-sans-v27-latin-regular.eot?#iefix) format('embedded-opentype'), /* IE6-IE8 */
  url(../assets/fonts/open-sans-v27-latin-regular.woff2) format('woff2'), /* Super Modern Browsers */
  url(../assets/fonts/open-sans-v27-latin-regular.woff) format('woff'), /* Modern Browsers */
  url(../assets/fonts/open-sans-v27-latin-regular.ttf) format('truetype'), /* Safari, Android, iOS */
  url(../assets/fonts/open-sans-v27-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
 }




 ${({ theme }) =>
   theme.mainStyle === 'light' &&
   `${lightTheme}
  `}

  ${({ theme }) =>
   theme.mainStyle === 'dark' &&
    ` ${darkTheme}`
  }

  #root {
    font-family: var(--font-family);
   }
`;

export const GlobalStyles = createGlobalStyle`${StyledGlobalCss}`;
export default GlobalStyles;

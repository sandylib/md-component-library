export interface BaseProps {
  fontWeight?: number | 'bold' | 'regular';
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Optional Link target (defaults to '#')
   */
  href?: string;
  /**
   * (deprecated) content of the link - Recommended to use `children` now.
   */
  value?: string;
  /**
   * Optional should the extra link be visible (defaults to false)
   */
  showExtraLink?: boolean;

  /**
   * Optional click event handler
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}


export interface ParagraphProps extends BaseProps {
  /**
   * Optional CSS text-align property
   */
  textAlign?: 'center' | 'left' | 'right';
  /**
   * Optional CSS font-size property
   */
  fontSize?: number;
  /**
   * Optional CSS text color property
   */
  color?: string;
}

export interface HeaderProps extends BaseProps {}

import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2';
  color?: string;
  children: React.ReactNode;
};

export const Typography = ({
  variant,
  color = '#000',
  children,
}: TypographyProps) => {
  let styles: React.CSSProperties = {};

  switch (variant) {
    case 'h1':
      styles = {fontSize: '3rem', fontWeight: 'bold'};
      return <h1 style={{...styles, color}}>{children}</h1>;

    case 'h2':
      styles = {fontSize: '2.5rem', fontWeight: 'bold'};
      return <h2 style={{...styles, color}}>{children}</h2>;

    case 'h3':
      styles = {fontSize: '2rem', fontWeight: 'bold'};
      break;
    case 'h4':
      styles = {fontSize: '1.5rem', fontWeight: 'bold'};
      break;
    case 'h5':
      styles = {fontSize: '1.25rem', fontWeight: 'bold'};
      break;
    case 'body1':
      styles = {fontSize: '1rem', fontWeight: 'normal'};
      break;
    case 'body2':
      styles = {fontSize: '0.875rem', fontWeight: 'normal'};
      break;
    default:
      styles = {};
  }

  return <span style={{...styles, color}}>{children}</span>;
};

export default Typography;

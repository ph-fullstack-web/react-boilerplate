import React, {FC, HTMLAttributes} from 'react';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  text: string;
  variant: string;
  marginRight?: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  text,
  variant,
  marginRight,
}) => {
  let styles: React.CSSProperties = {};
  console.log(marginRight);

  switch (variant) {
    case 'add':
      styles = {
        backgroundColor: '#25be45',
        color: '#fff',
        marginRight: marginRight,
      };
      break;
    case 'update':
      styles = {backgroundColor: '#f3f613', marginRight: marginRight};
      break;
    case 'delete':
      styles = {
        backgroundColor: '#d63f3f',
        color: '#fff',
        marginRight: marginRight,
      };
      break;
    default:
      styles = {
        backgroundColor: '#f9f9f9',
        color: '#1a1a1a',
        marginRight: marginRight,
      };
  }

  return (
    <button style={{...styles}} onClick={onClick}>
      {text}
    </button>
  );
};

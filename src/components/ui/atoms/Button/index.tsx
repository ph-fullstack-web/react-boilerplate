import React from 'react';

type ButtonProps = {
  onClick: () => void;
  text: string;
  variant: string;
};

export const Button = ({onClick, text, variant}: ButtonProps) => {
  let styles: React.CSSProperties = {};

  switch (variant) {
    case 'add':
      styles = {backgroundColor: '#25be45', color: '#fff'};
      break;
    case 'update':
      styles = {backgroundColor: '#f3f613'};
      break;
    case 'delete':
      styles = {backgroundColor: '#d63f3f', color: '#fff'};
      break;
    default:
      styles = {backgroundColor: '#f9f9f9', color: '#1a1a1a'};
  }

  return (
    <button style={{...styles}} onClick={onClick}>
      {text}
    </button>
  );
};

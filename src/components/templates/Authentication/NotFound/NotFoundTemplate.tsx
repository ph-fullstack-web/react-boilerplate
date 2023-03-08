import React from 'react';
import styled, {keyframes} from 'styled-components';

import {BackLink, Typography} from 'components/ui/atoms';

import styles from './NotFoundTemplate.module.scss';

export const NotFoundTemplate = () => {
  const shakeAnimation = keyframes`
    0% { transform: translateX(0); }
    10% { transform: translateX(-10px) rotate(-5deg); }
    20% { transform: translateX(10px) rotate(5deg); }
    30% { transform: translateX(-10px) rotate(-5deg); }
    40% { transform: translateX(10px) rotate(5deg); }
    50% { transform: translateX(-10px) rotate(-5deg); }
    60% { transform: translateX(10px) rotate(5deg); }
    70% { transform: translateX(-10px) rotate(-5deg); }
    80% { transform: translateX(10px) rotate(5deg); }
    90% { transform: translateX(-10px) rotate(-5deg); }
    100% { transform: translateX(0) rotate(0); }
  `;

  const Title = styled.h1`
    font-size: 5rem;
    margin: 0;
    text-align: center;
    color: #555;
    animation: ${shakeAnimation} 5s ease-in-out;
  `;

  return (
    <div className={styles.notFoundWrapper}>
      <Title>Page Not Found</Title>
      <Typography variant="h1" color="#999">
        The page you are looking for doesn't exist.
      </Typography>
      <BackLink navigateTo="/" text="Go back to the homepage" />
    </div>
  );
};

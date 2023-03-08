import {Link} from 'react-router-dom';
import styled from 'styled-components';

type BackLinkProps = {
  navigateTo: string;
  text: string;
};

export const BackLink = ({navigateTo, text}: BackLinkProps) => {
  const BackLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: #333;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  `;

  return <BackLink to={navigateTo}>{text}</BackLink>;
};

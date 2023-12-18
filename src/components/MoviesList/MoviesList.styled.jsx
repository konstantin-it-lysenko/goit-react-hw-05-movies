import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const Item = styled.li`
  width: calc((100% - 40px) / 2);
  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    max-width: 180px;
    width: calc((100%) - 120px) / 4;
  }

  @media screen and (min-width: 1024px) {
    max-width: 200px;
    width: calc((100%) - 160px) / 6;
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MovieTitle = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;

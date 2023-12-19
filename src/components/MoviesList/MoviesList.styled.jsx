import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const Item = styled.li`
  width: calc((100% - 50px) / 2);
  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 150px) / 4);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 230px) / 6);
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
  font-size: 0.9rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

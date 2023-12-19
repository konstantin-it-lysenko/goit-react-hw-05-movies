import styled from '@emotion/styled';
import { theme } from 'constants';
import { Link } from 'react-router-dom';

export const CastReviewsList = styled.ul`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CastReviewLink = styled(Link)`
  padding: 8px 20px;
  font-size: 0.8rem;
  color: ${theme.colors.fontPrimary};
  border-radius: 3px;
  background: ${theme.colors.btnBackground};
  &:hover {
    background: ${theme.colors.active};
  }
`;

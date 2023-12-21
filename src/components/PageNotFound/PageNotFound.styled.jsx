import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'constants';

export const NotFoundWrapper = styled.div`
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Descr = styled.p`
  max-width: 700px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const HomeBackLink = styled(Link)`
  padding: 12px 32px;
  font-size: 1.5rem;
  color: ${theme.colors.fontPrimary};
  border-radius: 3px;
  background: ${theme.colors.btnBackground};
  &:hover {
    background: ${theme.colors.active};
  }
`;

import styled from '@emotion/styled';
import { theme } from 'constants';

export const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 335px;
  min-height: 100dvh;

  color: ${theme.colors.fontPrimary};
  /* background: ${theme.colors.mainBackground}; */

  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1140px;
  }
`;

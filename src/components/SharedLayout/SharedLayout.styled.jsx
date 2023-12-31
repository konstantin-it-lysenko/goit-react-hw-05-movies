import styled from '@emotion/styled';
import { theme } from 'constants';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 335px;
  color: ${theme.colors.fontPrimary};

  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
    padding: 0 48px;
  }
`;

export const Header = styled.header`
  background: ${theme.colors.background};
  padding: 12px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  letter-spacing: -0.5px;
  font-size: 1.7rem;
  font-weight: 500;
  color: ${theme.colors.logo};
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const PageLink = styled(NavLink)`
  padding: 8px 20px;
  font-size: 0.8rem;
  color: ${theme.colors.fontPrimary};
  border-radius: 3px;
  background: ${theme.colors.btnBackground};
  &:hover {
    background: ${theme.colors.active};
  }
  &.active {
    background: ${theme.colors.active};
  }
`;

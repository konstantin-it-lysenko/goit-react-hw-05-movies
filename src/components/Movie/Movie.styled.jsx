import styled from '@emotion/styled';
import { theme } from 'constants';

export const BackgroundWrapper = styled.div`
  padding: 40px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.background}) no-repeat center/cover;
    filter: blur(10px);
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    padding: 80px 0;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    padding: 80px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const TimeAgeInfo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${theme.colors.fontSecondary};
  font-size: 0.9rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Adult = styled.span`
  position: relative;
  ::before {
    position: absolute;
    content: '|';
    left: -8px;
    top: 0;
  }
`;

export const Overview = styled.p`
  max-width: 300px;
  font-size: 0.9rem;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    font-size: 1rem;
    line-height: 1.1;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Genres = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  color: ${theme.colors.fontSecondary};
  font-size: 0.9rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

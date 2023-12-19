import styled from '@emotion/styled';

export const SectionHero = styled.section`
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  font-weight: 900;
  font-size: 2.4rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  max-width: 440px;
  word-spacing: 1px;
  line-height: 1.2;
  font-weight: 350;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;

import styled from '@emotion/styled';

export const List = styled.ul`
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 40px;
  @media screen and (min-width: 768px) {
    gap: 30px 40px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  width: calc((100% - 40px) / 2);

  @media screen and (min-width: 768px) {
    width: calc((100% - 80px) / 3);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 120px) / 4);
  }
`;

export const CastImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: url(${props => props.actor}) no-repeat 0px -25px / cover;
  background-position: center;

  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 240px;
  }
`;

export const Character = styled.p`
  font-style: italic;
  font-size: 0.9rem;
`;

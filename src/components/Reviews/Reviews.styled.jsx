import styled from '@emotion/styled';
import { theme } from 'constants';

export const List = styled.ul`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Author = styled.p`
  font-weight: 500;
`;

export const Content = styled.p`
  padding: 10px;
  border: ${theme.border.onePx};
  border-radius: 6px;
`;

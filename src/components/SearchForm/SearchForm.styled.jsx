import styled from '@emotion/styled';
import { theme } from 'constants';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 100px;
`;

export const Input = styled.input`
  width: 180px;
  padding: 12px 12px;
  border-radius: 4px;
  color: ${theme.colors.fontPrimary};
  font-size: 1rem;
  border: ${theme.border.onePx};
  background-color: transparent;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 428px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: ${theme.colors.btnBackground};
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:is(:hover, :focus) {
    background-color: ${theme.colors.active};
  }
`;

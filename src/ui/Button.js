import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;

  ${(props) =>
    props.primary &&
    css`
      background: #369bf5;
      color: white;
    `};

  ${(props) =>
    props.disabled &&
    css`
      background: #b5b5b5;
      color: #5f5d5d;
    `};
`;

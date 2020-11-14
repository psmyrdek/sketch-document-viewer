import styled, { css } from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 6px 8px;
  border-radius: 4px;

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

  ${(props) =>
    props.transparent &&
    css`
      background: none;
      color: #333;
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `};
`;

export default Button;

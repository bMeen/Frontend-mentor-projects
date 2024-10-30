import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;

  ${(props) =>
    props.$type === "primary" &&
    css`
      border: 2px solid var(--medium-gray);
      color: var(--medium-gray);

      &:hover {
        border: 2px solid var(--almost-black);
        color: var(--almost-black);
      }
    `}

  ${(props) =>
    props.$type === "fill" &&
    css`
      border: 1px solid var(--almost-black);
      background-color: var(--almost-black);
      color: var(--almost-white);
      font-weight: 700;

      &:hover {
        color: var(--almost-black);
        background-color: var(--almost-white);
      }
    `}

    ${(props) =>
    (props.$type === "primary" || props.$type === "fill") &&
    css`
      padding: 1rem 2rem;
      border-radius: 9px;
      font-size: inherit;
    `}
`;

const Button = StyledButton;

export default Button;

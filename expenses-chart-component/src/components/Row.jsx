import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.$type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.$type === "vertical" &&
    css`
      flex-direction: column;
      gap: 0.25rem;
    `}

  ${(props) =>
    props.$direction === "bottom" &&
    css`
      align-self: flex-end;
    `}

   & span {
    text-align: right;
    color: var(--dark-brown);
  }
`;

Row.defaultProps = {
  $type: "horizontal",
};

export default Row;

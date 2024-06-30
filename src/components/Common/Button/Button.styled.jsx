import styled from "styled-components";

export const LinkBtn = styled.a`
  width: 130px;
  height: 39px;
  background: var(--accent-color);
  color: var(--main-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  border-radius: 500px;

  svg {
    transform: rotate(135deg);
    fill: none;
    stroke: var(--main-dark);
    background: var(--main-dark);
    border-radius: 50%;
  }
`;

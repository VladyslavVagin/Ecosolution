import styled from "styled-components";

export const LinkBtn = styled.a`
  width: 130px;
  height: 39px;
  background-color: var(--accent-color);
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

  @media screen and (min-width: 1280px) {
    transition: all var(--hover-effect);

    svg {
      transition: all var(--hover-effect);
    }

    &:hover {
      background-color: var(--main-dark);
      color: var(--accent-color);

      svg {
        background: var(--accent-color);
      }
    }
  }
`;

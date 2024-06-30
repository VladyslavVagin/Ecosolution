import styled from "styled-components";

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

  a {
    color: var(--white-color);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .active {
    color: var(--accent-color);
  }
`;

import styled from "styled-components";

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  background: var(--accent-color);
  margin: 24px auto;

  @media screen and (min-width: 768px) {
    height: 87px;
  }

  @media screen and (min-width: 1280px) {
    margin: 16px auto 17px auto;
  }
`;

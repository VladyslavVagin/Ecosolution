import styled from "styled-components";

export const FlexContainer = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 19px;
  padding: 24px 0;
  margin: 0 auto;
  border-top: 1px solid var(--accent-color);

  a {
    transform: rotate(-45deg);
  }
`;

import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  letter-spacing: -0.04em;

  div {
    a {
      color: var(--main-dark);
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

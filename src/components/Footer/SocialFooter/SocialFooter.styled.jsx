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
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    max-width: 56px;
    max-height: 24px;
    margin: 0 auto;
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    position: relative;
    padding-bottom: 100px;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    column-gap: 24px;
  }
`;

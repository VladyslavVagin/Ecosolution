import styled from "styled-components";

export const SectionHero = styled.section`
  padding-top: 110px;
  padding-bottom: 36px;
`;

export const ContentHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 55px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 24px;
  }
`;

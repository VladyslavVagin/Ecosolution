import styled from "styled-components";

export const SectionHero = styled.section`
  padding-top: 110px;
`;

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
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

import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 353px;
    padding-left: 11px;
    border-left: 1px solid var(--accent-color);
  }
`;

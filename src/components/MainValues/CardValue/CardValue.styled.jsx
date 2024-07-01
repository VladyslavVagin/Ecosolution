import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 197px;
  background: var(--cards-bg);
  padding: 13px 16px 0;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  margin-bottom: 33px;

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
    color: var(--main-dark);
  }

  svg {
    fill: var(--cards-bg);
    stroke: var(--main-dark);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }
`;

export const TextCard = styled.p`
  font-size: 14px;
  letter-spacing: -0.04em;
  text-align: justify;
  padding-top: 12px;
  border-top: 1px solid var(--accent-color);
`;

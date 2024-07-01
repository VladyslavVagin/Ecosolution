import styled from "styled-components";

export const SlideContainer = styled.div`
  background: var(--cards-bg);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 342px;
    max-width: 342px;
    height: 322px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 61px;
  padding: 24px 12px 21px;

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.04em;
    text-align: justify;
    color: var(--main-dark);
  }

  @media screen and (min-width: 768px) {
    column-gap: 64px;
    padding: 24px 12px 16px;

    p {
      font-size: 20px;
    }
  }
`;

export const TitleDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-dark);
  font-size: 12px;
  letter-spacing: -0.04em;
  padding: 12px;
  border-top: 1px solid var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

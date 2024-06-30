import styled from "styled-components";

export const SlideContainer = styled.div`
  background: var(--cards-bg);
  overflow: hidden;
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
`;

import styled from "styled-components";

export const ItemContainer = styled.div`
  cursor: pointer;
`;

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: var(--main-dark);
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--accent-color);

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.04em;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    margin-top: ${({ id }) => (id === "1" ? "0" : "16px")};
  }
`;

export const AnswerBox = styled.div`
  width: calc(100% - 24px);
  font-size: 14px;
  letter-spacing: -0.04em;
  text-align: justify;
  margin-left: auto;
  margin-top: 16px;
  animation: slideIn 800ms ease 1;
`;

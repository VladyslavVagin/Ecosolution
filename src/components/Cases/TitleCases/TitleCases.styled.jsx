import styled from "styled-components";

export const TitleCasesStyled = styled.div`
  max-width: 268px;
  margin-right: auto;
  margin-bottom: 116px;

  @media screen and (min-width: 768px) {
    max-width: 354px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  }
`;

export const VerticalLine = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 1px;
    height: 65px;
    background: var(--accent-color);
  }
`;

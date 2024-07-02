import styled from "styled-components";

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    width: 299px;
    position: absolute;
    bottom: 100px;
    right: 44px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    bottom: 120px;
    right: 0;

   > p {
      font-size: 24px;
    }
  }
`;

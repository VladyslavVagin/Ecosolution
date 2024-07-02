import styled from "styled-components";

export const ContainerMain = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 100px;
  }
`;


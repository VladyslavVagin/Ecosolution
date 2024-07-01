import styled from "styled-components";

export const BtnBox = styled.div`
  width: 100%;
  padding: 0 0 8px 0;
  border-bottom: 1px solid var(--white-color);
  margin-bottom: 24px;
`;

export const CloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 4px;
  color: var(--white-color);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.04em;
  padding: 0;
`;

export const SocialMediaBox = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: 56px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    svg {
      stroke: var(--white-color);
    }

    &:first-of-type {
      svg {
        fill: var(--white-color);
      }
    }
  }
`;

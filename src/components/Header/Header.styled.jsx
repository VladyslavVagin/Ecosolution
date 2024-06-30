// @ts-nocheck
import styled from "styled-components";

export const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 36px 0;
  background-color: ${({ 'data-scrolled': scrolled }) => (scrolled ? "var(--white-color)" : "var(--main-bg)")};
  transition: background-color 0.3s ease;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

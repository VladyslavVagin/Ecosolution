import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  backdrop-filter: blur(4px);
  background: rgba(23, 61, 51, 0.25);
  animation: appear 400ms ease 1;
`;

export const ModalContainer = styled.div`
  border-radius: 25px;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 19px;
  backdrop-filter: blur(25px);
  background: rgba(23, 61, 51, 0.75);
  animation: appear 600ms ease 1;
`;

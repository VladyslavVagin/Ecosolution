import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;
  padding: 36px 12px;
  background: var(--cards-bg);
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.04em;

  textarea,
  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--accent-color);
    background: transparent;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: var(--main-dark);

    &::placeholder {
      color: var(--placeholder-color);
      font-size: 18px;
      font-weight: 400;
      letter-spacing: -0.04em;
    }
  }

  input {
    height: 31px;
  }

  textarea {
    height: 147px;
  }
`;

export const ErrorMsg = styled.p`
  width: 100%;
  color: var(--error-color);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.04em;
  text-align: right;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  border: 1px solid #97d28b;
  border-radius: 500px;
  padding: 4px 4px 4px 16px;
  width: 99px;
  height: 40px;
  background: transparent;
  margin-left: auto;
  letter-spacing: -0.04em;
  color: var(--main-dark);

  svg {
    transform: rotate(45deg);
  }
`;

import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
`

export const Numbers = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-color);
`;

export const Kilowatt = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: var(--main-dark);
`;

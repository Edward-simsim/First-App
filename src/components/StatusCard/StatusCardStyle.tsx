import styled, { css } from "styled-components";

export const StatusCardContainer = styled.div(
  ({ color }) => css`
    min-width: 243px;
    background-color: white;
    border-radius: 15px;
    min-height: 95px;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    box-shadow: 0px 4px 0px 0px ${color};
  `
);

export const IconWraper = styled.div`
  justify-content: center;
  display: flex;
`;
export const TextWraper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-top: 4px;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
`;

export const Text = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  padding-top: 7px;
  margin-left: 8px;
`;

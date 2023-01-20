import styled from "styled-components";

export const DashboardCard = styled.div`
  width: 8cm;
  height: 11cm;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 20px;
  flex-direction: column;
  box-shadow: 4px 4px 4px 4px #e0e0e0;
  border-radius: 10px;
  align-items: center;
  display: flex;
`;

export const DashboardCardContent = styled.div`
margin-top: 20px;
  display: inline;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`;

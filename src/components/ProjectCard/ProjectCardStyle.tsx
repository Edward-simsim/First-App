import styled from "styled-components";

export const ProjectsCard = styled.div`
  width: 7.5cm;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  position: relative;
  background-color: white;
  margin-right: 30px;
  margin-top: 20px;
`;
export const ProjectsCardContainer = styled.div`
  height: 4cm;
  -webkit-line-clamp: 4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  font-size: "15px";
`;

export const PeopleIconWrapper = styled.div`
  z-index: 999;
  top: 17px;
  right: 30px;
  position: absolute;
`;

export const ProjectsCardDate = styled.div``;
export const ProjectsWrapper = styled.div`
  z-index: 1;
`;

export const ProjectsText = styled.div`
  justify-content: space-between;
  display: flex;
  font-size: 17px;
`;

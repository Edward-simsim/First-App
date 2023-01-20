import styled from "styled-components";

export const Modal = styled.div`
  width: 650px;
  height: 525px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
`;
export const ModalContainer = styled.div`
  flex-direction: row;
  display: flex;
  padding: 30px;
  width: 100%;
  height: 100%;
`;

export const ModalLeft = styled.div`
  width: 50%;
  height: 100%;
  border-right: 2px solid #7c7c7c;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
export const ModalRight = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const LeftContent = styled.div`
  padding-top: 20px;
`;
export const RightContent = styled.div`
  padding-top: 20px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

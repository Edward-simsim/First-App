import styled from "styled-components";

export const Modal = styled.div`
  width: 450px;
  height: 525px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding-left: 70px;
  padding-right: 70px;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

export const ModalContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;
export const ModalButton = styled.div``;

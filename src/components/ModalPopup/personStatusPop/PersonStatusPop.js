import React from "react";
import Modal from "@mui/material/Modal";
import * as Style from "./PersonStatusPopStyle";
import PeopleSummaryCard from "components/PeopleSummaryCard/PeopleSummaryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  assignOrUnassignPerson,
  getAssignedPerson,
  getPersonsByAvailabilityStatus,
} from "api/personsApi";
import { assignedPersonsList, availablePersonsList } from "slices/personsSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const PersonStatusPop = (props) => {
  const { open, handleStatusClose, entity } = props;

  const assignedPersons = useSelector(assignedPersonsList);
  const dispatch = useDispatch();

  useEffect(() => {
    getAvailable("AVAILABLE");
    getAssigned(entity.id);
  }, [entity]);

  const getAssigned = (entity) => {
    dispatch(getAssignedPerson(entity)).then((answer) => {});
  };

  const availablePersons = useSelector(availablePersonsList);

  const getAvailable = (status) => {
    dispatch(getPersonsByAvailabilityStatus(status));
  };

  const handleAddOrRemove = (personId) => {
    let addOrRemove = { personId, projectId: entity.id };
    dispatch(assignOrUnassignPerson(addOrRemove))
      .unwrap()
      .then((answer) => {
        getAvailable("AVAILABLE");
        getAssigned(entity.id);
      });
  };

  return (
    <Modal open={open} onClose={handleStatusClose}>
      <Style.Modal>
        <Style.ModalContainer>
          <Style.ModalLeft>
            <p>ASSIGNED PERSONS</p>
            <Style.LeftContent>
              {assignedPersons.map((assigned) => (
                <Style.Icon>
                  <RemoveCircleOutlineIcon
                    onClick={() => handleAddOrRemove(assigned.id)}
                  />
                  <PeopleSummaryCard person={assigned} key={assigned.id} />
                </Style.Icon>
              ))}
            </Style.LeftContent>
          </Style.ModalLeft>
          <Style.ModalRight>
            <p>AVAILABLE PERSONS</p>
            <Style.RightContent>
              {availablePersons.map((available) => (
                <Style.Icon>
                  <AddCircleOutlineIcon
                    onClick={() => handleAddOrRemove(available.id)}
                  />
                  <PeopleSummaryCard person={available} key={available.id} />
                </Style.Icon>
              ))}
            </Style.RightContent>
          </Style.ModalRight>
        </Style.ModalContainer>
      </Style.Modal>
    </Modal>
  );
};

export default PersonStatusPop;

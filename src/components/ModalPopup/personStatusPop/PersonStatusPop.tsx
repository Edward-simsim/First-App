import React from 'react';
import { useEffect } from "react";

// STYLES
import * as Style from './PersonStatusPopStyle';

// LIBRARIES
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// MISC

// ASSETS

// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  assignOrUnassignPerson,
  getAssignedPerson,
  getPersonsByAvailabilityStatus,
} from "api/personsApi";
import { assignedPersonsList, availablePersonsList } from "slices/personsSlice";

// COMPONENTS
import PeopleSummaryCard from "components/PeopleSummaryCard/PeopleSummaryCard";

const PersonStatusPop = (props) => {
    // PROPS
    const { open, handleStatusClose, entity } = props;

    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 
    const dispatch = useDispatch();
    const assignedPersons = useSelector(assignedPersonsList);
    const availablePersons = useSelector(availablePersonsList);

    // USE EFFECT FUNCTION
    useEffect(() => {
        getAvailable("AVAILABLE");
        getAssigned(entity.id);
      }, [entity]);
    // REQUEST API FUNCTIONS
    const getAssigned = (entity) => {
        dispatch(getAssignedPerson(entity)).then((answer) => {});
      };

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
    // HANDLERS FUNCTIONS

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
}

export default PersonStatusPop;
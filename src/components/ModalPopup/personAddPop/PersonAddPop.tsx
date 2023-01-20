import React from "react";
import { useEffect, useState } from "react";

// STYLES
import * as Style from "./PersonAddPopStyle";

// LIBRARIES
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ButtonAtom from "components/ButtonAtom/ButtonAtom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// MISC

// ASSETS

// REDUX
import { useDispatch } from "react-redux";
import { createPerson, editPerson, deletePerson } from "api/personsApi";

// COMPONENTS
const availablePositions = [
  {
    key: "FULLSTACK",
    text: "FULLSTACK",
  },
  {
    key: "BACKEND",
    text: "BACKEND",
  },
  {
    key: "FRONTEND",
    text: "FRONTEND",
  },
];
const PersonAddPop = (props) => {
  // PROPS
  const { open, entity, handleClose, closeWithRefetchData } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const [entityDetails, setEntityDetails] = useState<IEntity>(null);
  const [positionObject, setPositionObject] = useState(
    availablePositions.find((position) => position.key === entity.position)
  );
  const dispatch = useDispatch();

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (entity.id) {
      setEntityDetails(entity);
    }
  }, [entity]);
  // REQUEST API FUNCTIONS
  const handleCreatePerson = () => {
    let createPersonObject = { ...entityDetails, position: positionObject.key };
    dispatch(createPerson(createPersonObject))
      .unwrap()
      .then((answer) => {
        closeWithRefetchData();
      });
  };

  const handleEditPerson = () => {
    let editPersonObject = { ...entityDetails, position: positionObject.key };
    dispatch(editPerson(editPersonObject))
      .unwrap()
      .then((answer) => {
        closeWithRefetchData();
      });

    console.log("EDITING PERSON: merge?", entityDetails);
    console.log("EDITING PERSON: merge?", entity.position);
  };

  const handleDeletePerson = () => {
    dispatch(deletePerson(entity.id))
      .unwrap()
      .then((answer) => {
        closeWithRefetchData();
      });
    console.log("DELET PERSON: merge?", entity.position);
  };
  // HANDLERS FUNCTIONS
  const handleInputChange = (event) => {
    setEntityDetails({
      ...entityDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setPositionObject(
      availablePositions.find((position) => position.key === event.target.value)
    );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Style.Modal>
        {entity.id ? <h2>EDIT A PERSON</h2> : <h2>CREATE A PERSON</h2>}
        <Style.ModalContainer>
          <p
            style={{
              fontSize: "17px",
              color: "grey",
              marginBottom: "7px",
              marginTop: "7px",
            }}
          >
            First Name
          </p>
          <TextField
            value={entityDetails?.firstName}
            variant="outlined"
            name="firstName"
            onChange={handleInputChange}
          />
          <p
            style={{
              fontSize: "17px",
              color: "grey",
              marginTop: "7px",
              marginBottom: "7px",
            }}
          >
            Last Name
          </p>
          <TextField
            value={entityDetails?.lastName}
            variant="outlined"
            name="lastName"
            onChange={handleInputChange}
          />
          <p
            style={{
              fontSize: "17px",
              color: "grey",
              marginTop: "7px",
              marginBottom: "7px",
            }}
          >
            Position
          </p>
          <Select
            onChange={handleChange}
            value={positionObject?.key ? positionObject.key : "FRONTEND"}
          >
            {availablePositions.map((position) => {
              return (
                <MenuItem key={position.key} value={position.key}>
                  {position?.text}
                </MenuItem>
              );
            })}
          </Select>
        </Style.ModalContainer>
        <Style.ModalButton>
          <ButtonAtom
            text={entity.id ? "EDIT" : "CREATE"}
            style={{
              color: "grey",
            }}
            handleClick={entity.id ? handleEditPerson : handleCreatePerson}
          />
          {entity.id && (
            <ButtonAtom
              handleClick={handleDeletePerson}
              text="DELETE"
              style={{
                color: "grey",
              }}
            />
          )}
        </Style.ModalButton>
      </Style.Modal>
    </Modal>
  );
};

export default PersonAddPop;

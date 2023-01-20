import React from 'react';
import { useState, useEffect } from "react";

// STYLES
import * as Style from './ProjectsAddPopStyle';

// LIBRARIES
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ButtonAtom from "components/ButtonAtom/ButtonAtom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// MISC

// ASSETS

// REDUX
import { useDispatch } from "react-redux";
import { createProject, deleteProject, editProject } from "api/projectsApi";

// COMPONENTS
const projectStatus = [
    {
      key: "IN_PROGRESS",
      text: "IN PROGRESS",
    },
    {
      key: "PENDING",
      text: "PENDING",
    },
    {
      key: "DONE",
      text: "DONE",
    },
  ];
  
const ProjectsAddPop = (props) => {
    // PROPS
    const { open, entity, handleClose, closeWithRefetchData } = props;

    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS
    const [valueStart, setValueStart] = useState(dayjs(""));
    const [valueFinish, setValueFinish] = useState(dayjs(""));
    const [valueEnd, setValueEnd] = useState(dayjs(""));
    const [entityData, setEntityData] = useState(null);
    const [statusObject, setStatusObject] = useState(
      projectStatus.find((status) => status.key === entity.status)
    );
    // GENERAL CONSTANTS 
    const dispatch = useDispatch();

    // USE EFFECT FUNCTION

    useEffect(() => {
        if (entity.id) {
          setEntityData(entity);
        }
      }, [entity]);

    // REQUEST API FUNCTIONS
    const handleCreateProject = () => {
        let createProjectData = {
          ...entityData,
          startDate: valueStart,
          deadline: valueFinish,
          endDate: valueEnd,
        };
        dispatch(createProject(createProjectData))
          .unwrap()
          .then((answer) => {
            closeWithRefetchData();
            console.log("am trimis?", entityData);
          });
      };
    
      const handleEditProject = () => {
        let editProjectData = {
          ...entityData,
          status: statusObject.key,
    
          startDate: valueStart,
          deadline: valueFinish,
          endDate: valueEnd,
        };
        dispatch(editProject(editProjectData))
          .unwrap()
          .then((answer) => {
            closeWithRefetchData();
          });
      };
    
      const handleDeleteProject = () => {
        dispatch(deleteProject(entity.id))
          .unwrap()
          .then((answer) => {
            closeWithRefetchData();
          });
        console.log("DELET PERSON: merge?", entity.position);
      };
    // HANDLERS FUNCTIONS
 const handleInputChange = (event) => {
    setEntityData({
      ...entityData,
      [event.target.name]: event.target.value,
    });
  };
  const handleStatusChange = (event) => {
    setStatusObject(
      projectStatus.find((status) => status.key === event.target.value)
    );
  };


    return  (
    <Modal open={open} onClose={handleClose}>
      <Style.Modal>
        {entity.id ? <h2>EDIT PROJECT</h2> : <h2>CREATE PROJECT</h2>}
        <Style.ModalContainer>
          <p style={{ fontSize: "17px", color: "grey", marginTop: "7px" }}>
            Title
          </p>
          <TextField
            onChange={handleInputChange}
            value={entityData?.title}
            name="title"
            size="small"
            variant="outlined"
          />

          <p style={{ fontSize: "17px", color: "grey", marginTop: "7px" }}>
            Description
          </p>
          <TextField
            onChange={handleInputChange}
            value={entityData?.description}
            name="description"
            size="small"
            variant="outlined"
          />
          {entity.id && <p>Status</p>}

          {entity.id && (
            <Select
              onChange={handleStatusChange}
              value={statusObject?.key ? statusObject.key : "PENDING"}
            >
              {projectStatus.map((status) => {
                return (
                  <MenuItem key={status.key} value={status.key}>
                    {status?.text}
                  </MenuItem>
                );
              })}
            </Select>
          )}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start date"
              value={valueStart}
              minDate={dayjs("2017-01-01")}
              onChange={(newValue) => {
                <TextField size="small" variant="outlined" />;
                setValueStart(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  id="standard-basic"
                  variant="standard"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Deadline"
              value={valueFinish}
              minDate={dayjs("2017-01-01")}
              onChange={(newValue) => {
                setValueFinish(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  id="standard-basic"
                  variant="standard"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          {entity.id && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label=" End date"
                value={valueEnd}
                minDate={dayjs("2017-01-01")}
                onChange={(newValue) => {
                  setValueEnd(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    id="standard-basic"
                    variant="standard"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        </Style.ModalContainer>
        <Style.ModalButton>
          <ButtonAtom
            text={entity.id ? "EDIT" : "CREATE"}
            handleClick={entity.id ? handleEditProject : handleCreateProject}
            style={{
              color: "grey",
            }}
          />
          {entity.id &&(
            <ButtonAtom
              handleClick={handleDeleteProject}
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
}

export default ProjectsAddPop;
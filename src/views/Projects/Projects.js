import * as Style from "./ProjectsStyle";
import ProjectsCard from "../../components/ProjectCard/ProjectsCard";
import TabsAtom from "../../components/TabsAtom/TabsAtom";
import { useState, useEffect } from "react";
import React from "react";
import ProjectsAddPop from "components/ModalPopup/projectsAddPop/ProjectsAddPop";
import PersonStatusPop from "components/ModalPopup/personStatusPop/PersonStatusPop";
import { useSelector, useDispatch } from "react-redux";
import { projectsList } from "slices/projectsSlice";
import { getProjectsByStatus } from "api/projectsApi";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("IN_PROGRESS");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState({});
  const [isModalOn, setIsModalOn] = useState(false);
  const dispatch = useDispatch();

  const projectsListData = useSelector(projectsList);

  useEffect(() => {
    getProjectsData(selectedTab);
  }, []);

  useEffect(() => {
    getProjectsData(selectedTab);
  }, [selectedTab]);

  const getProjectsData = (status) => {
    dispatch(getProjectsByStatus(status));
  };

  const handlePersonStatus = (entity) => {
    setIsModalOn(true);
    setSelectedEntity(entity);
    console.log("SE DESCHIDE", entity);
  };

  const handleOpenModal = (type, entity) => {
    if (type === "create") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(true);
      setSelectedEntity(entity);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedEntity({});
  };

  const handleStatusClose = () => {
    setIsModalOn(false);
    setSelectedEntity({});
  };

  const handleButtonClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleCloseAndRefetchData = () => {
    setIsModalVisible(false);
    setSelectedEntity({});
    getProjectsData(selectedTab);
  };

  console.log({projectsListData})

  const options = [
    {
      key: "IN_PROGRESS",
      text: "IN PROGRESS",
      handleClick: () => handleButtonClick("IN_PROGRESS"),
    },
    {
      key: "PENDING",
      text: "PENDING",
      handleClick: () => handleButtonClick("PENDING"),
    },
    {
      key: "DONE",
      text: "DONE",
      handleClick: () => handleButtonClick("DONE"),
    },
  ];

  return (
    <Style.Projects>
      <Style.ProjectsHeader>
        <TabsAtom
          options={options}
          selected={selectedTab}
          handleAddEntity={() => handleOpenModal("create")}
        />
      </Style.ProjectsHeader>
      <Style.ProjectsContainer>
        {projectsListData.map((project) => (
          <ProjectsCard
            entity={project}
            handleEditEntity={(entity) => handleOpenModal("edit", entity)}
            handlePersonStatus={(entity) => handlePersonStatus(entity)}
            key={project.id}
          />
        ))}
      </Style.ProjectsContainer>
      <ProjectsAddPop
        handleClose={handleCloseModal}
        entity={selectedEntity}
        open={isModalVisible}
        setOpen={setIsModalVisible}s
        closeWithRefetchData={handleCloseAndRefetchData}
      />
      <PersonStatusPop
        open={isModalOn}
        setOpen={setIsModalOn}
        handleStatusClose={handleStatusClose}
        entity={selectedEntity}
      />
    </Style.Projects>
  );
};

export default Projects;

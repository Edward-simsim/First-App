import React, { useState, useEffect } from "react";

// STYLES
import * as Style from "./PersonsStyle";

// LIBRARIES

// MISC

// ASSETS

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getPersonsByAvailabilityStatus } from "api/personsApi";
import { personsList } from "slices/personsSlice";

// COMPONENTS
import PersonsCard from "../../components/PersonsCard/PersonsCard";
import TabsAtom from "../../components/TabsAtom/TabsAtom";
import PersonAddPop from "components/ModalPopup/personAddPop/PersonAddPop";

const Persons = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const [selectedTab, setSelectedTab] = useState("AVAILABLE");
  const [selectedEntity, setSelectedEntity] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  // GENERAL CONSTANTS
  const dispatch = useDispatch();
  const personsListData = useSelector(personsList);

  // USE EFFECT FUNCTION
  useEffect(() => {
    getPersonsData(selectedTab);
  }, []);

  useEffect(() => {
    getPersonsData(selectedTab);
  }, [selectedTab]);
  // REQUEST API FUNCTIONS
  const getPersonsData = (status) => {
    dispatch(getPersonsByAvailabilityStatus(status));
  };
  // HANDLERS FUNCTIONS

  const handleButtonClick = (tab) => {
    setSelectedTab(tab);
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
  const handleCloseAndRefetchData = () => {
    setIsModalVisible(false);
    setSelectedEntity({});
    getPersonsData(selectedTab);
  };

  const options = [
    {
      key: "AVAILABLE",
      text: "AVAILABLE",
      handleClick: () => handleButtonClick("AVAILABLE"),
    },
    {
      key: "UNAVAILABLE",
      text: "ON PROJECT",
      handleClick: () => handleButtonClick("UNAVAILABLE"),
    },
  ];

  return(
    <Style.Persons>
      <Style.PersonsHeader>
        <TabsAtom
          options={options}
          selected={selectedTab}
          handleAddEntity={() => handleOpenModal("create")}
        />
      </Style.PersonsHeader>
      <Style.PersonsContainer>
        {personsListData.map((person) => (
          <PersonsCard
            entity={person}
            handleEditEntity={(entity) => handleOpenModal("edit", entity)}
            key={person.id}
          />
        ))}
      </Style.PersonsContainer>
    <PersonAddPop
    open={isModalVisible}
    setOpen={setIsModalVisible}
    handleClose={handleCloseModal}
    closeWithRefetchData={handleCloseAndRefetchData}
    entity={selectedEntity}/>
    </Style.Persons>
  );
        };
export default Persons;

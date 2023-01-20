import { createSlice } from "@reduxjs/toolkit";
import {
  getPersonsByAvailabilityStatus,
  createPerson,
  deletePerson,
  editPerson,
  getAssignedPerson,
  assignOrUnassignPerson,
} from "api/personsApi";

const initialState = {
  personsList: [],
  assignedPersonsList: [],
  availablePersonsList: [],
  isLoading: false,
  errorMessage: "",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //ASSIGN OR UNNASSIGN
    builder.addCase(assignOrUnassignPerson.pending, (state, action) => {
      state.isLoading = true;
      console.log("SLICE REMOVE PERSON: ajunge?");
      state.errorMessage = "";
    });
    builder.addCase(assignOrUnassignPerson.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("SLICE REMOVE PERSON: merge?");
    });
    builder.addCase(assignOrUnassignPerson.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
      console.log("SLICE REMOVE PERSON:nu  merge");
    });

    // GET ASSIGNDE PERSON

    builder.addCase(getAssignedPerson.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getAssignedPerson.fulfilled, (state, action) => {
      state.isLoading = false;
      state.assignedPersonsList = action.payload;
    });
    builder.addCase(getAssignedPerson.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    //EDIT PERSON
    builder.addCase(editPerson.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(editPerson.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(editPerson.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    //DELETE PERSON
    builder.addCase(deletePerson.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(deletePerson.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deletePerson.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
    // CREATE PERSON
    builder.addCase(createPerson.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(createPerson.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createPerson.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
    // GET PERSONS BY AVAILABLITY STATUS

    builder.addCase(getPersonsByAvailabilityStatus.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(
      getPersonsByAvailabilityStatus.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.personsList = action.payload;
        state.availablePersonsList = action.payload;
      }
    );
    builder.addCase(
      getPersonsByAvailabilityStatus.rejected,
      (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      }
    );
  },
});

export const assignedPersonsList = (state) => state.person.assignedPersonsList;
export const availablePersonsList = (state) =>
  state.person.availablePersonsList;
export const personsList = (state) => state.person.personsList;
export const isLoading = (state) => state.person.isLoading;
export const errorMessage = (state) => state.person.errorMessage;

export default personSlice.reducer;

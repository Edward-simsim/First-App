import { createSlice } from "@reduxjs/toolkit";
import {
  createProject,
  getProject,
  getProjectsByStatus,
  deleteProject,
  editProject,
} from "api/projectsApi";

const initialState = {
  projectsList: [],
  project: {
    id: 0,
    title: "",
    description: "",
    status: "",
    startDate: new Date(),
    endDate: new Date(),
    deadline: new Date(),
  },
  projectTeam: [],
  isLoading: false,
  errorMessage: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //EDIT PROJECT
    builder.addCase(editProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(editProject.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(editProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // CREATE PROJECT
    builder.addCase(createProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("SPLICE PROJECT");
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // GET PROJECT
    builder.addCase(getProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
    });
    builder.addCase(getProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // GET PROJECTS BY STATUS
    builder.addCase(getProjectsByStatus.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getProjectsByStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectsList = action.payload;
    });
    builder.addCase(getProjectsByStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // DELETE PROJECT
    builder.addCase(deleteProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export const projectsList = (state) => state.project.projectsList;
export const projectTeam = (state) => state.project.projectTeam;

export default projectSlice.reducer;

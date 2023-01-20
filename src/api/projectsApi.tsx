import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REST } from "config/axiosConfig";

export const createProject = createAsyncThunk(
  "project/createProject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("api/project", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const editProject = createAsyncThunk(
  "project/editProject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.put(
        `/api/project?projectId=${data.id}`,
        data
      );
      console.log("RESPONSE INSIDE API PERSONS:", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProject = createAsyncThunk(
  "project/getProject",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/project?projectId=${projectId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProjectsByStatus = createAsyncThunk(
  "project/getProjectsByStatus",
  async (status, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `api/project/getProjectByStatus?status=${status}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await REST.delete(`/api/project?projectId=${projectId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

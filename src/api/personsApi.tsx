import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { REST } from "config/axiosConfig";

export const createPerson = createAsyncThunk(
  "person/createPerson",
  async (bodyObject, { rejectWithValue }) => {
    try {
      const response = await REST.post(`api/person/create`, bodyObject);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editPerson = createAsyncThunk(
  "person/editPerson",
  async (bodyObject, { rejectWithValue }) => {
    try {
      const response = await REST.put(
        `/api/person/update?personId=${bodyObject.id}`,
        bodyObject
      );
      console.log("RESPONSE INSIDE API PERSONS:", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPersonsByAvailabilityStatus = createAsyncThunk(
  "person/getPersonsByAvailabilityStatus",
  async (status, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `api/person/getPersonsByAvailabilityStatus?status=${status}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAssignedPerson = createAsyncThunk(
  "project/getAssignedPersons",
  async (projectId, { rejectWithValue }) => {
    console.log("AM INTRAT IN FUCNTIE?");

    try {
      const response = await REST.get(
        `api/project/getAssignedPersons?projectId=${projectId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const assignOrUnassignPerson = createAsyncThunk(
  "api/project/assignOrUnassignPerson",
  async (data, { rejectWithValue }) => {
    console.log("AM INTRAT IN FUCNTIE?", data);
    try {
      const response = await REST.post(
        `api/project/assignOrUnassignPerson?personId=${data.personId}&projectId=${data.projectId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePerson = createAsyncThunk(
  "person/deletePerson",
  async (personId, { rejectWithValue }) => {
    console.log("AM INTRAT IN FUCNTIE?");
    try {
      const response = await REST.delete(
        `api/person/delete?personId=${personId}`
      );
      console.log("DELET PERSON: merge?");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

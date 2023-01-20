import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST } from "config/axiosConfig";

export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REST.get("api/statistics");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

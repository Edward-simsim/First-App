import { createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "api/statisticsApi";

const initialState = {
  statistics: {
    projectsInProgress: 0,
    projectsDone: 0,
    projectsPending: 0,
    noOfAvailablePersons: 0,
    upcomingDeadlines: [],
    upcomingStartDates: [],
    availablePersons: [],
  },
  isLoading: false,
  errorMessage: "",
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatistics.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getStatistics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.statistics = action.payload;
    });
    builder.addCase(getStatistics.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export const statistics = (state) => state.statistics.statistics;
export const isLoading = (state) => state.statistics.isLoading;
export const errorMessage = (state) => state.statistics.errorMessage;

export default statisticsSlice.reducer;

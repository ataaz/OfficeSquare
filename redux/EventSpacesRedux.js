import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getEventSpaces = createAsyncThunk(
  "EventSpaces/getEventSpaces",
  async () => {
    const response = await axios.get(
      "https://api.officesquare.com/wp-json/wp/v2/services?slug=event-spaces"
    );
    const data = await response.data;
    // console.log(data[0]);
    return data;
  }
);

const EventSpacesSlice = createSlice({
  name: "EventSpaces",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getEventSpaces.pending]: (state, action) => {
      state.status = "loading";
    },
    [getEventSpaces.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getEventSpaces.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default EventSpacesSlice.reducer;
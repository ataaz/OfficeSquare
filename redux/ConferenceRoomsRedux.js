import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getConferenceRooms = createAsyncThunk(
  "ConferenceRooms/getConferenceRooms",
  async () => {
    const response = await axios.get(
      "https://api.officesquare.com/wp-json/wp/v2/services?slug=conference-rooms"
    );
    const data = await response.data;
    // console.log(data[0]);
    return data;
  }
);

const ConferenceRoomsSlice = createSlice({
  name: "ConferenceRooms",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getConferenceRooms.pending]: (state, action) => {
      state.status = "loading";
    },
    [getConferenceRooms.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getConferenceRooms.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default ConferenceRoomsSlice.reducer;
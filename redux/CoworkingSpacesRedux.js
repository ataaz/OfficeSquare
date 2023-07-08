import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCoworkingSpaces = createAsyncThunk(
  "CoworkingSpaces/getCoworkingSpaces",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/wp/v2/services?slug=co-working-spaces"
    );
    const data = await response.data;
    // console.log(data[0]);
    return data;
  }
);

const CoworkingSpacesSlice = createSlice({
  name: "CoworkingSpaces",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getCoworkingSpaces.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCoworkingSpaces.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getCoworkingSpaces.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default CoworkingSpacesSlice.reducer;
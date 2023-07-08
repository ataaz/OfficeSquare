import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHomepage = createAsyncThunk(
  "Homepage/getHomepage",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/api/v4/gethome"
    );
    const data = await response.data;
    // console.log(data);
    return data;
  }
);

const HomepageSlice = createSlice({
  name: "Homepage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getHomepage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getHomepage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getHomepage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default HomepageSlice.reducer;
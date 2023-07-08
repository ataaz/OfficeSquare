import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAboutpage = createAsyncThunk(
  "Aboutpage/getAboutpage",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/api/v4/getabout"
    );
    const data = await response.data;
    // console.log(data);
    return data;
  }
);

const AboutpageSlice = createSlice({
  name: "Aboutpage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getAboutpage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAboutpage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getAboutpage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default AboutpageSlice.reducer;
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProManagement = createAsyncThunk(
  "ProManagement/getProManagement",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/wp/v2/services?slug=management"
    );
    const data = await response.data;
    console.log(data[0]);
    return data;
  }
);

const ProManagementSlice = createSlice({
  name: "ProManagement",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getProManagement.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProManagement.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getProManagement.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default ProManagementSlice.reducer;
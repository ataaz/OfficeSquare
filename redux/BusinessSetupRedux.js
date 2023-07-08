import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBusinessSetup = createAsyncThunk(
  "BusinessSetup/getBusinessSetup",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/wp/v2/services?slug=business-setup"
    );
    const data = await response.data;
    console.log(data[0]);
    return data;
  }
);

const BusinessSetupSlice = createSlice({
  name: "BusinessSetup",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getBusinessSetup.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBusinessSetup.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getBusinessSetup.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default BusinessSetupSlice.reducer;
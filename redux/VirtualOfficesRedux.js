import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVirtualOffices = createAsyncThunk(
  "VirtualOffices/getVirtualOffices",
  async () => {
    const response = await axios.get(
      "https://api.officesquare.com/wp-json/wp/v2/services?slug=virtual-office"
    );
    const data = await response.data;
    console.log(data[0]);
    return data;
  }
);

const VirtualOfficesSlice = createSlice({
  name: "VirtualOffices",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getVirtualOffices.pending]: (state, action) => {
      state.status = "loading";
    },
    [getVirtualOffices.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getVirtualOffices.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default VirtualOfficesSlice.reducer;
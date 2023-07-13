import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPrivateWorkspaces = createAsyncThunk(
  "PrivateWorkspaces/getPrivateWorkspaces",
  async () => {
    const response = await axios.get(
      "https://api.officesquare.com/wp-json/wp/v2/services?slug=private-workspaces"
    );
    const data = await response.data;
    // console.log(data[0].acf.header_images[0].image.url);
    return data;
  }
);

const PrivateWorkspacesSlice = createSlice({
  name: "PrivateWorkspaces",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getPrivateWorkspaces.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPrivateWorkspaces.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getPrivateWorkspaces.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default PrivateWorkspacesSlice.reducer;
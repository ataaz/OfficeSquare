import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPrivacypage = createAsyncThunk(
  "Privacypage/getPrivacypage",
  async () => {
    const response = await axios.get(
      "https://api.officesquare.com/wp-json/wp/v2/pages/3"
    );
    const data = await response.data;
    // console.log(data);
    return data;
  }
);

const PrivacypageSlice = createSlice({
  name: "Privacypage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getPrivacypage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPrivacypage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getPrivacypage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default PrivacypageSlice.reducer;
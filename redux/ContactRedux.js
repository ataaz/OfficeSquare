import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getContactPage = createAsyncThunk(
  "ContactPage/getContactPage",
  async () => {
    const response = await axios.get(
      "https://officesquare.com/apis/wp-json/api/v4/getcontact"
    );
    const data = await response.data;
    // console.log(data);
    return data;
  }
);

const ContactPageSlice = createSlice({
  name: "ContactPage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getContactPage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getContactPage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getContactPage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default ContactPageSlice.reducer;
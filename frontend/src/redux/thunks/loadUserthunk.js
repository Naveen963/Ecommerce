import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  try {
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    return data.user;
  } catch (error) {
    throw error.response.data.message;
  }
});

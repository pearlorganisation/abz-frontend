import { instance } from "@/services/Axios/axiosInterceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/login", { payload });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

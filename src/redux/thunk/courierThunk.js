import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterJourneyByCourierIdAPI, postCourierAPI } from "../../utils/api/courierApi";
import { handleAxiosError } from "./authThunk";

// Upload Single File Thunk
export const postCourier = createAsyncThunk(
  "document/upload",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postCourierAPI(data);
      return response?.data;

    } catch (error) {
      console.log("Error in postCourier Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Upload Single File Thunk
export const filterJourneyByCourierId = createAsyncThunk(
  "document/upload",
  async (data, { rejectWithValue }) => {
    try {
      const response = await filterJourneyByCourierIdAPI(data);
      return response?.data;

    } catch (error) {
      console.log("Error in postCourier Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);




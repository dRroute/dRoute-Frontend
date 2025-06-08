import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserOrdersAPI } from "../../utils/api/orderApi";
import { handleAxiosError } from "./authThunk";


// Get All Courier By UserId
export const getAllNearestJourney = createAsyncThunk(
  "journey/getUserAllNearestJourney",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllNearestJourneyAPI(data);
      return response?.data;

    } catch (error) {
      console.log("Error in getAllNearestJourney Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const getAllJourney = createAsyncThunk(
  "journey/getUserAllJourney",
  async ( { rejectWithValue }) => {
    try {
      const response = await getAllJourneyAPI();
      return response?.data;

    } catch (error) {
      console.log("Error in getAllJourney Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

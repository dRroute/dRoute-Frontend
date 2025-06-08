import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserOrdersAPI } from "../../utils/api/orderApi";
import { handleAxiosError } from "./authThunk";


// Get All Courier By UserId
export const getUserAllOrders = createAsyncThunk(
  "order/getUserAllOrders",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getUserOrdersAPI(data);
      return response?.data;

    } catch (error) {
      console.log("Error in postCourier Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);



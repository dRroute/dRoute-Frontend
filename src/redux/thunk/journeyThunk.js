import { getUserOrdersAPI } from "../../utils/api/orderApi";
import { handleAxiosError } from "./authThunk";


// Get All Courier By UserId
export const getAllNearestJourney = createAsyncThunk(
  "order/getUserAllOrders",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllNearestJourneyAPI(data);
      return response?.data;

    } catch (error) {
      console.log("Error in postCourier Thunk:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

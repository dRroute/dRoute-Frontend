import Key from "../../constants/key"; // Import Key object
import { apiGetRequest } from "../http/get";

// Constants
const { ORDER_API_URL } = Key;
// API CALLS
export const getUserOrdersAPI = (userId) =>
  apiGetRequest({
    apiUrl: `${ORDER_API_URL}/user/${userId}?status=all`,
    content_type: "application/json",
    data: null,
    accessToken: null,
  });
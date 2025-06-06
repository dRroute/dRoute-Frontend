import { apiPostRequest } from "../http/post";
// import { APP_BACKEND_API } from "@env";
import { apiGetRequest } from "../http/get";
import { apiPutRequest } from "../http/put";
import Key from "../../constants/key"; // Import Key object

// Constants
const { USER_API_URL } = Key;
// API CALLS
export const postCourierAPI = (data) =>
  apiPostRequest({
    apiUrl: `${USER_API_URL}/courier`,
    content_type: "application/json",
    data,
    accessToken: null,
  });

  //For filtering journeys by courier ID
export const filterJourneyByCourierIdAPI = (courierId) =>
  apiPostRequest({
    apiUrl: `${USER_API_URL}/courier/${courierId}/journeys`,
    content_type: "application/json",
    data: null, 
    accessToken: null,
  });

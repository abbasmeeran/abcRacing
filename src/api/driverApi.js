import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/drivers/";

export function getDrivers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

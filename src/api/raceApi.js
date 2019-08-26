import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/races/";

export function getRaces() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

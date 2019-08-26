import * as types from "./actionTypes";
import * as raceApi from "../../api/raceApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRacesSuccess(races) {
  return { type: types.LOAD_RACES_SUCCESS, races };
}

export function loadRaces() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return raceApi
      .getRaces()
      .then(races => {
        dispatch(loadRacesSuccess(races));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

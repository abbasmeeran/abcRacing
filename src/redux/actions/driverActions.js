import * as types from "./actionTypes";
import * as driverApi from "../../api/driverApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDriversSuccess(drivers) {
  return { type: types.LOAD_DRIVERS_SUCCESS, drivers };
}

export function loadDrivers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return driverApi
      .getDrivers()
      .then(drivers => {
        dispatch(loadDriversSuccess(drivers));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

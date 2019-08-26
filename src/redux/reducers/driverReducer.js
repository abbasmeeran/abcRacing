import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function driverReducer(state = initialState.drivers, action) {
  switch (action.type) {
    case types.LOAD_DRIVERS_SUCCESS:
      return action.drivers;
    default:
      return state;
  }
}

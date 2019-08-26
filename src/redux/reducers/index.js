import { combineReducers } from "redux";
import drivers from "./driverReducer";
import races from "./raceReducer";
import authentication from "./authReducer";
import bookmarks from "./bookmarkReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  drivers,
  races,
  authentication,
  apiCallsInProgress,
  bookmarks
});

export default rootReducer;

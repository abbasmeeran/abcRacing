import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as driverActions from "./actions/driverActions";

it("Should load drivers", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const drivers = [
    {
      id: 1,
      name: 'abbas'
    }
  ]

  // act
  const action = driverActions.loadDriversSuccess(drivers);
  store.dispatch(action);

  // assert
  expect(drivers[0]).toEqual(store.getState().drivers[0]);
});

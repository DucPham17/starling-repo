import { SETUP_DASHBOARD } from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  expenses: [],
  location: {
    latitude: 41.5,
    longitude: -90.547
  },
  weather: {
    temp: 0
  }
};

const setupDashboard = (state, action) => ({
  ...state,
  ...action.payload,
});
   
export const dashboardReducer = (state = defaultState, action) => {
  const reducerMapper = {
      [SETUP_DASHBOARD]: setupDashboard
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};
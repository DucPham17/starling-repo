import { SET_TODOS, SET_SELECTED_DATE } from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  selectedDate: new Date()
};

const setTodos = (state, action) => ({
  ...state,
  todos: action.todos
});

const setSelectedDate = (state, action) => ({
  ...state,
  selectedDate: action.selectedDate
})

export const todoReducer = (state = defaultState, action) => {
  const reducerMapper = {
      [SET_TODOS]: setTodos,
      [SET_SELECTED_DATE]: setSelectedDate
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};
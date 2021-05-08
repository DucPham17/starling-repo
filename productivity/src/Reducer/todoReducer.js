import { SET_TODOS, SET_SELECTED_DATE, TOGGLE_TODOS, DELETE_TODOS, UPDATE_TODOS, SET_SELECTED_TAG, SET_SELECTED_COMPLETION} from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  isCompleted: false,
  selectedDate: new Date(),
  selectedTag: "All",
  selectByCompletion: "All",
};

const setTodos = (state, action) => ({
  ...state,
  todos: action.todos,
});

const setSelectedDate = (state, action) => ({
  ...state,
  selectedDate: action.selectedDate
})

const setSelectedTag = (state, action) => ({
  ...state,
  [action.key]: action.value,
})

const selectByCompletion = (state, action) => ({
  ...state,
  selectByCompletion: action.selectByCompletion
})

const toggleTodos = (state, action) => ({
  ...state,
  todos: action.todos,
    
})

const updateTodos = (state, action) => ({
  ...state,
  todos: action.todos,
});

const deleteTodos = (state, action) => ({
  ...state,
  todos: action.todos,
});
   
export const todoReducer = (state = defaultState, action) => {
  const reducerMapper = {
      [SET_TODOS]: setTodos,
      [SET_SELECTED_DATE]: setSelectedDate,
      [SET_SELECTED_TAG]: setSelectedTag,
      [SET_SELECTED_COMPLETION]: selectByCompletion,
      [TOGGLE_TODOS]: toggleTodos,
      [UPDATE_TODOS]: updateTodos,
      [DELETE_TODOS]: deleteTodos,
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};
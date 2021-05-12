import { SET_TODOS, SET_SELECTED_DATE, TOGGLE_TODOS, DELETE_TODOS, UPDATE_TODOS, SET_SELECTED_TAG} from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  isCompleted: false,
  selectedDate: new Date(),
  selectedTag: "All",
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
      [TOGGLE_TODOS]: toggleTodos,
      [UPDATE_TODOS]: updateTodos,
      [DELETE_TODOS]: deleteTodos,
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};
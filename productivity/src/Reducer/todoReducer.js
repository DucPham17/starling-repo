import { SET_TODOS, SET_SELECTED_DATE, TOGGLE_TODOS, UPDATE_TODOS, DELETE_TODOS} from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  isCompleted: false,
  selectedDate: new Date()
};

const setTodos = (state, action) => ({
  ...state,
  todos: action.todos,
});

const setSelectedDate = (state, action) => ({
  ...state,
  selectedDate: action.selectedDate
})

const toggleTodos = (state, action) => {
    if(state.id === action.id){
      return {
        ...state,
        isCompleted: !state.isCompleted,
      };
    }
    return state;
    
}

const updateTodos = (state, action) => {
  const newState = state.map(todo => {
    if(todo.id === action.id) {
      return {
        ...state,
        title: action.title,
        description: action.description,
      }
    }
    return todo;
  })
  return newState;
}

const deleteTodos = (state, action) => {
  const newState = state.filter(todo => {
    return todo.id !== action.id;
  });

  return newState;
}
   
export const todoReducer = (state = defaultState, action) => {
  const reducerMapper = {
      [SET_TODOS]: setTodos,
      [SET_SELECTED_DATE]: setSelectedDate,
      [TOGGLE_TODOS]: toggleTodos,
      [UPDATE_TODOS]: updateTodos,
      [DELETE_TODOS]: deleteTodos,
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};
const initialState = {
    title: '', 
    description: '',
    isComplete: false,
}

const updateModal = (state, action) => {
    return {
        ...state,
        ...action.value
    }
}

const getModal = (state, action) => {
    return {
        ...state,
        ...action.value
    }
}

export const updateTodoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_TODOS': {
            return updateModal(state, action)
        }  
        case 'GET': {
            return getModal(state, action)
        } 
        default:
            return state;
        }
}
const initialState = {
    title: '', 
    tag: '',
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


const setModal = (state, action) => {
    return {
        ...state, 
        [action.key]: action.value,
    }
}

export const updateTodoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_TASKS': {
            return updateModal(state, action)
        }  
        case 'GET_TASKS': {
            return getModal(state, action)
        } 
        case 'SET_TASKS': {
            return setModal(state, action)
        } 
        default:
            return state;
        }
}
const initialState = {
    type: '',
    date: ''
};

const getFilter = (state, action) => {
    return {
        ...state,
    }
}

const setFilter = (state, action) => {
    return {
        ...state, 
        [action.key]: action.value,
    }
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type){  
        case 'GETF': {
            return getFilter(state, action)
        } 
        case 'SETF': {
            return setFilter(state, action)
        } 
        default:
            return state;
        }
}

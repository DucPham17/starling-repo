const initialState = {
    name: '',
    amount: '', 
    expenseType: '', 
};

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

export const updateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE': {
            return updateModal(state, action)
        }  
        case 'GET': {
            return getModal(state, action)
        } 
        default:
            return state;
        }
}


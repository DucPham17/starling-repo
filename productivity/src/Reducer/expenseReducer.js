const initialState = {
    loading: false,
    expense: []
};

export const expenseReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                loading : true
            }
        case 'ADD_SUCCESS':
            return {
                ...state,
                expense : action.payload,
                loading : false
            }
        case 'ADD_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'DELETE':
            return {
                ...state,
                loading : true
            }
        case 'DELETE_SUCCESS':
            return {
                ...state,
                expense : action.payload,
                loading : false
            }
        case 'DELETE_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'GET':
            return {
                ...state,
                loading : true
            }
        case 'GET_SUCCESS':
            return {
                ...state,
                expense : action.payload,
                loading : false
            }
        case 'GET_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

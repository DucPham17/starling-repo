const initialState = {
    type: 'All',
    date: 'All', 
    filterList: [],
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type){  
        case 'GETF': {
            return {
                ...state,
            }
        } 
        case 'SETF': {
            return {
                ...state, 
                [action.key]: action.value,
            }
        }
        case 'FILTER':
            return {
                ...state,
                loading : true
            }
        case 'FILTER_SUCCESS':
            return {
                ...state,
                filterList : action.payload,
                loading : false
            }
        case 'FILTER_FAIL':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
        }
}

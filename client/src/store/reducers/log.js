import * as actionTypes from '../actionTypes';

const initialState = {
    logArr: [],
    selectedLog: null
}

export const log = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_ADDED:
            return {
                ...state,
                logArr: [...state.logArr, action.payload]
            }
        case actionTypes.LOG_DELETED:
            let arr = state.logArr.filter(p => p.id !== action.payload);
            return {
                ...state,
                logArr: arr
            }
        case actionTypes.LOG_SAVED:
            return {
                ...state,
                logArr: [...action.payload]
            }
        default:
            break;
    }
    return state;
}
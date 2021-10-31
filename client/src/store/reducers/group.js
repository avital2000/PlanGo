import * as actionTypes from '../actionTypes';

const initialState = {
    groupArr: [],
    selectedGroup: null
}

export const group = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GROUP_ADDED:
            return {
                ...state,
                groupArr: [...state.groupArr, action.payload]
            }
        case actionTypes.GROUP_DELETED:
            let arr = state.groupArr.filter(p => p.id !== action.payload);
            return {
                ...state,
                groupArr: arr
            }
        case actionTypes.GROUP_SAVED:
            return {
                ...state,
                groupArr: [...action.payload]
            }
        default:
            break;
    }
    return state;
}
import * as actionTypes from '../actionTypes';

const initialState = {
    userArr: [],
    selectedUser: null
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_ADDED:
            return {
                ...state,
                userArr: [...state.userArr, action.payload]
            }
        case actionTypes.USER_DELETED:
            let arr = state.userArr.filter(p => p.id !== action.payload);
            return {
                ...state,
                userArr: arr
            }
        case actionTypes.USER_SAVED:
            return {
                ...state,
                userArr: [...action.payload]
            }
        default:
            break;
    }
    return state;
}

export default user;
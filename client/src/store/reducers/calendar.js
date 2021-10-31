import * as actionTypes from '../actionTypes';

const initialState = {
    calendarArr: [],
    selectedCalendar: null
}

export const calendar = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CALENDAR_ADDED:
            return {
                ...state,
                calendarArr: [...state.calendarArr, action.payload]
            }
        case actionTypes.CALENDAR_DELETED:
            let arr = state.calendarArr.filter(p => p.id !== action.payload);
            return {
                ...state,
                calendarArr: arr
            }
        case actionTypes.CALENDAR_SAVED:
            return {
                ...state,
                calendarArr: [...action.payload]
            }
        default:
            break;
    }
    return state;
}
import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const getAllCalendars = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/calendar/getAll").then(calendarList => {
            console.log("succeeded");
            // כאן הוא משגר לרידוסר את סייב לוגס
            dispatch(saveCalendars(calendarList.data));
        }).catch(err => { console.log("failed"); console.log(err.message); });
    }
}

export const addCalendar = (calendar) => {
    return {
        type: actionTypes.CALENDAR_ADDED,
        payload: calendar
    }
}

const saveCalendars = (calendars) => {
    return {
        type: actionTypes.CALENDAR_SAVED,
        payload: calendars
    }
}

export const selectCalendar = (calendars) => {
    return {
        type: actionTypes.CALENDAR_SELECTED,
        payload: calendars
    }
}

export const deleteCalendar = (calendars) => {
    return {
        type: actionTypes.CALENDAR_DELETED,
        payload: calendars
    }
}
export default addCalendar;
import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const getAllLogs = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/log/getAll").then(logsList => {
            console.log("succeeded");
            // כאן הוא משגר לרידוסר את סייב לוגס
            dispatch(saveLogs(logsList.data));
        }).catch(() => console.log("failed"));
    }
}

export const getLogsById = (id) => {
    return (dispatch) => {
        axios.get("http://localhost:3001/log/getLogsById/" + id).then(logsList => {
            console.log("succeeded");
            dispatch(saveLogs(logsList.data));
        }).catch(err => console.log("failed"));
    }
}

export const addLog = (log) => {
    return {
        type: actionTypes.LOG_ADDED,
        payload: log
    }
}

const saveLogs = (logs) => {
    return {
        type: actionTypes.LOG_SAVED,
        payload: logs
    }
}

export const selectLog = (logs) => {
    return {
        type: actionTypes.LOG_SELECTED,
        payload: logs
    }
}

export const deleteLog = (logs) => {
    return {
        type: actionTypes.LOG_DELETED,
        payload: logs
    }
}
export default addLog;
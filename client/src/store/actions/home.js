import axios from "axios";

import * as actionTypes from '../actionTypes';

export const getData = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/log/getAll").then(logsList => {
            console.log("succeeded");
            // כאן הוא משגר לרידוסר את סייב לוגס
            dispatch(saveLogs(logsList.data));
        }).catch(err => console.log("failed"));
    }
}

const saveLogs = (logs) => {
    return {
        type: actionTypes.LOG_SAVED,
        payload: logs
    }
}

export default getData;

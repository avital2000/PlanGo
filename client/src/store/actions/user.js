import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const addUser = (user) => {
    return {
        type: actionTypes.USER_ADDED,
        payload: user
    }
}


export const getAllUsers = () => {
    return (dispatch) => {
        console.log('getAllUsers function');
        axios.get('http://localhost:3001/user/getAll').then(succ => {
            console.log("succeeded");
            dispatch(saveUsers(succ.data));
        }).catch(() => console.log("failed"));
    }
}

export const saveUsers = (users) => {
    return {
        type: actionTypes.USER_SAVED,
        payload: users
    }
}

export default addUser;
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
        axios.get('http://localhost:3000/user').then(succ => {
            console.log("succeeded");
            dispatch(saveUsers(succ));
        }).catch(err => console.log("failed"));
    }
}

export const saveUsers = (users) => {
    return {
        type: actionTypes.USER_SAVED,
        payload: users
    }
}

export default addUser;
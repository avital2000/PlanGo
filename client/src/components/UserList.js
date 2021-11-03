import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { getAllUsers } from '../store/actions/user';

//component starts here
const UserList = (props) => {
    const history = useHistory();
    useEffect(() => {
        function getAllUsers1() {
            props.getAllUsers();
        }
        getAllUsers1()
    }, [])
    const date = new Date();

    const editLog = () => {
        alert('עריכת יומן הושלמה');
    }

    const deleteLog = () => {
        alert('היומן נמחק מהמערכת');

    }

    const goHome = () => {
        // history.push('./');
    }
    return (<>
        <div>hello allUsers</div>
        <div>
            {props.userArr.map((item) => {
                return (<><div key={item._id}>
                    {/* <h3><b>{item.name}</b></h3> */}
                    <h2>{item.first_name}</h2>
                   
                </div></>)
            })}
        </div>
    </>)
}
const myMapStateToProps = (state) => {
    return {
        userArr: state.log.userArr ? state.log.userArr : [],
    }
}
//connect(the function that passes the state , { function to connect, need to import them })(component's name);
export default connect(myMapStateToProps, { getAllUsers })(UserList);
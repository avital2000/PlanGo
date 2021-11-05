import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { getLogsById } from '../store/actions/log';

//component starts here
const MyAccount = (props) => {
    const location = useLocation();
    const myparams = location && location.state ? location.state.user : null;
    console.log(myparams._id);
    useEffect(() => {
        function getGCLById1() {
            console.log('get groups, calendars, logs by id');
            props.getLogsById();
        }
        getGCLById1()
    }, [])
    return (<>
        <div className="main">My own logs, calendars and groups</div>
        <div>id: {myparams._id}</div>
        <div>full name: {myparams.first_name} {myparams.last_name}</div>
        <div>email: {myparams.email}</div>
        
    </>)
}
const myMapStateToProps = (state) => {
    return {
        logArr: state.log.logArr ? state.log.logArr : [],
    }
}
//connect(the function that passes the state , { function to connect, need to import them })(component's name);
export default connect(myMapStateToProps, { getLogsById })(MyAccount);
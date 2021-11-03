import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

import newLogo from '../images/LogoNoBack.png';
import Home from './Home';
import { getAllLogs, selectLog, deleteLog } from '../store/actions/log';
import NavBar from './NavBar';

//component starts here
const LogList = (props) => {
    const history = useHistory();
    useEffect(() => {
        function getAllLogs1() {
            props.getAllLogs();
        }
        getAllLogs1()
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
        {/* <NavBar /> */}
        {/* <img src={newLogo} className="miniLogo" onClick={goHome} /> */}
        <div>hello allLogs</div>
        <div>
            {props.logArr.map((item) => {
                return (<><div key={item._id}>
                    <h3><b>{item.name}</b></h3>
                    <h2>{item.start_date}</h2>
                    <p onClick={() => props.selectLog(item)} key={item._id}>
                        <input type="button" value="Edit" onClick={editLog} />
                        <input type="button" value="Delete" onClick={deleteLog} />
                    </p>
                </div></>)
            })}
        </div>
    </>)
}
const myMapStateToProps = (state) => {
    return {
        logArr: state.log.logArr ? state.log.logArr : [],
    }
}
//connect(the function that passes the state , { function to connect, need to import them })(component's name);
export default connect(myMapStateToProps, { getAllLogs, selectLog, deleteLog })(LogList);
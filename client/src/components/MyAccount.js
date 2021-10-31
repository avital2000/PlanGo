import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getLogsById } from '../store/actions/log';

//component starts here
const MyAccount = (props) => {

    useEffect(() => {
        function getLogsById1() {
            props.getLogsById('6128a1e19a16683048fb3bc1');
        }
        getLogsById1()
    }, [])


    return (<>
        <div className="main">My own logs, calendars and groups</div>
        {/* <div>
            {props.logArr.map((item) => {
                return (<><div key={item._id}>
                    <h3><b>{item.name}</b></h3>

                </div> 
                </>)
            })}
        </div>*/}
        {/* <div>
            <label>{props.id}</label>
        </div> */}
    </>)
}
const myMapStateToProps = (state) => {
    return {
        logArr: state.log.logArr ? state.log.logArr : [],
    }
}
//connect(the function that passes the state , { function to connect, need to import them })(component's name);
export default connect(myMapStateToProps, { getLogsById })(MyAccount);
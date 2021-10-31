import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getAllGroups, deleteGroup, selectGroup } from '../store/actions/group';

const GroupList = (props) => {

    useEffect(() => {
        function getAllGroups1() {
            props.getAllGroups();
        }
        getAllGroups1()
    }, [])

    return (<>
        <div>hello group list</div>
        <div>
            {props.groupArr.map((item) => {
                return (<><div key={item._id}>
                    <h3><b>{item.name}</b></h3>
                    <h2>{item.start_date}</h2>
                    <p onClick={() => props.selectGroup(item)} key={item._id}>

                    </p>
                </div></>)
            })}
        </div>
    </>)
}
const myMapStateToProps = (state) => {
    return {
        groupArr: state.group.groupArr ? state.group.groupArr : [],
    }
}
export default connect(myMapStateToProps, { getAllGroups, selectGroup, deleteGroup })(GroupList);
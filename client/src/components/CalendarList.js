import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { addCalendar, getAllCalendars, deleteCalendar, selectCalendar } from '../store/actions/calendar';
import NewCalendar from './NewCalendar';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

const CalendarList = (props) => {
    const history = useHistory();

    useEffect(() => {
        function getAllCalendars1() {
            props.getAllCalendars();
        }
        getAllCalendars1()
    }, [])
    const newCalendar = () => {
        <NewCalendar />
    }

    return (<>
            {/* <NavBar /> */}
        <div>hello calendar list</div>
        <div>
            {props.calendarArr.map((item) => {
                return (<><div key={item._id}>
                    <h3><b>{item.name}</b></h3>
                    <h2>{item.start_date}</h2>
                    <p onClick={() => props.selectCalendar(item)} key={item._id}>

                    </p>
                </div></>)
            })}
        </div>
        <a href='./newCalendar'>add new calendar</a>
        <p onClick={newCalendar}>add new calendar in a dialog</p>
    </>)
}
const myMapStateToProps = (state) => {
    return {
        calendarArr: state.calendar.calendarArr ? state.calendar.calendarArr : [],
    }
}
export default connect(myMapStateToProps, { getAllCalendars, selectCalendar, deleteCalendar })(CalendarList);

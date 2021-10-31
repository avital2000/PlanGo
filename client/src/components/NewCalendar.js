import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { addCalendar } from '../store/actions/calendar';

const NewCalendar = (props) => {

    useEffect(() => {

    }, [])

    return (<>
        <div>hello new calendar</div>
        <div>
                
        </div>
    </>)
}
const myMapStateToProps = (state) => {
    return {
        calendarArr: state.calendar.calendarArr ? state.calendar.calendarArr : [],
    }
}
export default connect(myMapStateToProps, { addCalendar })(NewCalendar);
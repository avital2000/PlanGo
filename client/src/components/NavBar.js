import React from 'react';
import { useHistory } from 'react-router';


import newLogo from '../images/LogoNoBack.png';
import './css/NavBar.css';
import SignUp from './SignUpDialog';

const NavBar = () => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*Burger Bar */
    const container = React.createRef();
    const [state, setState] = React.useState(false);
    const handleButtonClick = () => {
        setState((state) => {
            return {
                open: !state.open,
            };
        });
    };
    const handleClickOutside = (event) => {
        if (
            container.current &&
            !container.current.contains(event.target)
        ) {
            setState(false);
        }
    };

    const goHome = () => {
        history.push('./');
    }

    const handleOpenList = (e) => {
        if (e === "groups")
            history.push('./groupList')
        else if (e === "calendars")
            history.push('./calendarList');
        else if (e === "logs")
        history.push('./logList');
    }

    return (
        <nav className="nav">
            <img className="background_image" />
            <img src={newLogo} alt={newLogo} className="miniLogo" onClick={goHome} />
            <div className="container" ref={container}>
                <button type="button" className="button" onClick={handleButtonClick}>
                    ☰
                </button>
                {state.open && (<div className="dropdown">
                    <ul>
                        <li onClick={()=>{handleOpenList("groups")}} value="groups">קבוצות</li>
                        <li onClick={()=>{handleOpenList("calendars")}} value="calendars">לוחות שנה</li>
                        <li onClick={()=>{handleOpenList("logs")}} value="logs">יומנים</li>
                        <li></li>
                    </ul>
                </div>)}
            </div>

            <SignUp />
        </nav>
    )
}

export default NavBar;
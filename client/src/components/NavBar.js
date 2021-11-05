import React from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';



import newLogo from '../images/LogoNoBack.png';
import './css/NavBar.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

const NavBar = () => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openSignUp, setOpenSignUp] = React.useState(false);
    const handleOpenSignUp = () => setOpenSignUp(true);
    const handleCloseSignUp = () => setOpenSignUp(false);

    const [openSignIn, setOpenSignIn] = React.useState(false);
    const handleOpenSignIn = () => setOpenSignIn(true);
    const handleCloseSignIn = () => setOpenSignIn(false);

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
        console.log('click outside');
        // if (
        //     container.current &&
        //     !container.current.contains(event.target)
        // ) {
        //     setState(false);
        // }
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
        <nav className="nav" onClick={handleClickOutside}>
            <img className="background_image" />
            <img src={newLogo} alt={newLogo} className="miniLogo" onClick={goHome} />
            <div className="container" ref={container}>
                <button type="button" className="button" onClick={handleButtonClick}>
                    ☰
                </button>
                {state.open && (<div className="dropdown">
                    <ul>
                        <li onClick={() => { handleOpenList("groups") }} value="groups">קבוצות</li>
                        <li onClick={() => { handleOpenList("calendars") }} value="calendars">לוחות שנה</li>
                        <li onClick={() => { handleOpenList("logs") }} value="logs">יומנים</li>
                        <li></li>
                    </ul>
                </div>)}
            </div>
            <Button onClick={handleOpenSignUp} className="sign_up_button">הירשם</Button>
            <Button onClick={handleOpenSignIn} variant="outlined" size="small" className="sign_up_button">היכנס</Button>

            {/* <SignUp open={openSignUp} /> */}
            {/* <SignUp open={openSignUp} handleClose={handleCloseSignUp}/> */}
            <SignUp open={openSignUp} handleClose={handleCloseSignUp}/>
            <SignIn open={openSignIn} handleClose={handleCloseSignIn}/>
        </nav>
    )
}

export default NavBar;
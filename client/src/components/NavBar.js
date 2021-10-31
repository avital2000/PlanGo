import { Link } from "react-router-dom";
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
    return (
        <nav className="nav">
            <img className="background_image" />
            <img src={newLogo} className="miniLogo" />
            {/* <label className="hamburger_menu" > ... </label> */}
            <div className="container" ref={container}>
                <button type="button" className="button" onClick={handleButtonClick}>
                    ☰
                </button>
                {state.open && (<div class="dropdown">
                    <ul>
                        <li>קבוצות</li>
                        <li>לוחות שנה</li>
                        <li>יומנים</li>
                        <li></li>
                    </ul>
                </div>)}
            </div>

            <SignUp />
        </nav>
    )
}

export default NavBar;
import React from 'react';
import './css/SignUp.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// import MyAccount from './MyAccount';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const history = useHistory();
    // useEffect(() => {
    //     handleSubmit(state);
    // }, []);

    const [state, setState] = React.useState({
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        errors: {}
    });

    const handleChange = () => {

    }

    const validate = (event) => {
        console.log(event);
        return true;
    }

    const handleSubmit = async (event) => {
        let isValid = validate(event);
        if (isValid) {
            let response = await axios.post('http://localhost:3001', state)
                .then(res => setState({ first_name: res.data }))
                .catch(error => { console.log(error.message); });
            // if (response)
            // history.push('/userAccount');
            console.log(response);
            // if (!response.data.ok && response.data.message) {
            //   history.push('/calendar');
            //   let currentUser = { ...data.user };
            // }
        }
    }

    return (
        <div>
            <Button onClick={handleOpen} className="sign_up_button">הירשם</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div className="sign_up_form">
                    <div className="wrap_title">
                        {/* <h2>Sign-In</h2> */}
                        <h2>Sign-Up</h2>
                    </div>
                    <form onSubmit={(state) => { handleSubmit(state) }}>
                        <input type="text" placeholder="שם פרטי"
                            id="first_name"
                            useref={state.first_name}
                            onChange={handleChange.bind(this, "firstName")} />
                        <br />
                        <br />
                        <input type="text" placeholder="שם משפחה" id="last_name" />
                        <br />
                        <br />
                        <input type="email" placeholder="כתובת מייל" id="email" />
                        <br />
                        <br />
                        <input type="password" placeholder="סיסמה" id="password" />
                        <br />
                        <br />
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default SignUp;
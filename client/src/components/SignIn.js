import useStyles from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';

import './css/SignUp.css';

const validationSchema = yup.object({
    email: yup
        .string('הכנס כתובת מייל')
        .email('כתובת מייל לא חוקית')
        .required('חובה להזין כתובת מייל'),
    password: yup
        .string('הכנס סיסמא')
        .min(6, 'סיסמא חייבת להכיל מינימום 6 תווים')
        .required('חובה להזין סיסמא'),
});

const SignUp = (props) => {
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showError, setShowError] = React.useState(false);
    const handleShowError = () => setShowError(true);

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            handleSubmit(values);
        },
    });

    const handleSubmit = async (values) => {
        try {
            let response = await axios.post('http://localhost:3001/user/signIn', formik.values);
            if (response.data.ok) {
                handleShowError();
                history.push({ pathname: '/userAccount', state: { user: response.data.user } });
            }
            else {
                alert(response.data.message);
                console.log(response.data.user_data);
                handleShowError();
            }
            console.log(response);
        }
        catch (e) {
            alert('catch');
            console.log(e);
        }
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className="sign_up_form">
                    <div className="wrap_title">
                        <h2>כניסה לחשבון קיים</h2>
                    </div>
                    <form dir="rtl" onSubmit={formik.handleSubmit}>
                        <Alert severity="error"
                            className={showError ? "error_elem_show" : "error_elem_hide"}>
                            משתמש זה אינו קיים במערכת!
                            <label className="signIn_link"> להרשמה לחץ כאן</label>
                        </Alert>
                        <TextField
                            id="email"
                            name="email"
                            label="אימייל"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            helperText={formik.touched.email && formik.errors.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <br />
                        <br />
                        <TextField
                            id="password"
                            name="password"
                            label="סיסמא"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <br />
                        <br />
                        <Button color="primary" variant="contained" type="submit">הירשם</Button>

                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default SignUp;
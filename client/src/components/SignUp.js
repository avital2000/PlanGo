import React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './css/SignUp.css';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8)
        errors.password = 'Must contain 8 characters at least';

    return errors;
};

const SignupForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
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
                    <form onSubmit={formik.handleSubmit}>
                        {/* <label htmlFor="firstName">First Name</label> */}
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="שם פרטי"
                            className={formik.errors.firstName && formik.touched.firstName ? 
                                "input-error" : null}
                        />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}
                        <br />
                        <br />
                        {/* <label htmlFor="lastName">Last Name</label> */}
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            placeholder="שם משפחה"
                            className={formik.errors.lastName && formik.touched.lastName ? 
                                "input-error" : null}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null}
                        <br />
                        <br />
                        {/* <label htmlFor="email">Email Address</label> */}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="כתובת מייל"
                            className={formik.errors.email && formik.touched.email ? 
                                "input-error" : null}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                        <br />
                        <br />
                        {/* <label htmlFor="password">סיסמא</label> */}
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="כתובת מייל"
                            className={formik.errors.password && formik.touched.password ? 
                                "input-error" : null}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                        <br />
                        <br />
                        <button type="submit">הירשם</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
};

export default SignupForm;
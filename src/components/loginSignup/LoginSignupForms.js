import React, { useState, useRef, useEffect } from "react";
import "./loginSignup.css";
import { Alert, CircularProgress } from '@mui/material';
import { Link } from "react-router-dom";

//redux
// import { connect } from "react-redux";
// import { login, signup, signupStart } from "../../redux/actions/auth";

function LoginSignupForms({ login, signup, isFetching, errorLogin, errorSignup }) {
    const loginEmail = useRef();
    const loginPassword = useRef();

    const signupUsername = useRef();
    const signupEmail = useRef();
    const signupPassword = useRef();
    const signupPassword2 = useRef();

    const [loginError, setLoginError] = useState(false);
    const [signUpError, setSignUpError] = useState(false);


    useEffect(() => {
        if(errorLogin) {
            setLoginError(errorLogin);
        } else if (errorSignup) {
            setSignUpError(errorSignup);
        }
    }, [errorSignup, errorLogin]);

    function submitLogin(event) {
        event.preventDefault();
        login({
            email: loginEmail.current.value,
            password: loginPassword.current.value
        });

    }


    const submitSignup = async (event) => {
        event.preventDefault();
        // signupStart();
        const user = {
            username: signupUsername.current.value,
            email: signupEmail.current.value,
            password: signupPassword.current.value,
            password2: signupPassword2.current.value,
        };

        // signup(user);
    };


    return (
        <div className="container-forms">
            <div className="signup-login">
                <form className="form-login" onSubmit={submitLogin}>
                    <h2 className="form-title">Login to 666@Citi.</h2>

                    {loginError && (
                        <Alert
                            severity="error"
                            onClose={() => setLoginError(false)}
                            stlye={{ maxWidth: "400px", width: "100%" }}
                        >
                            {loginError}
                        </Alert>
                    )}
                    <div className="input-field">
                        <i className="fa-solid fa-envelope"/>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            ref={loginEmail}
                            required
                        />
                    </div>

                    <div className="input-field">
                        <i className="fa-solid fa-lock"/>
                        <input
                            type="password"
                            name="password"
                            minLength="6"
                            placeholder="Password"
                            ref={loginPassword}
                            required
                        />
                    </div>

                    <button
                        className="bton"
                        type="submit"
                        name="button"
                        disabled={isFetching}
                    >
                        {isFetching ? (
                            <CircularProgress id="progress-icon" size="20px" />
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <form className="form-signup" onSubmit={submitSignup}>
                    <h2 className="form-title">Create Account</h2>

                    {signUpError && (
                        <Alert severity="error" onClose={() => setSignUpError(false)}>
                            {signUpError}
                        </Alert>
                    )}

                    <div className="input-field">
                        <i className="fa-solid fa-user"/>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            ref={signupUsername}
                        />
                    </div>

                    <div className="input-field">
                        <i className="fa-solid fa-envelope"/>
                        <input
                            type="emaill"
                            name="email"
                            placeholder="Email Address"
                            required
                            ref={signupEmail}
                        />
                    </div>

                    <div className="input-field">
                        <i className="fa-solid fa-lock"/>
                        <input
                            type="password"
                            name="password"
                            minLength="6"
                            placeholder="Password"
                            required
                            ref={signupPassword}
                        />
                    </div>

                    <div className="input-field">
                        <i className="fa-solid fa-lock"/>
                        <input
                            type="password"
                            name="password2"
                            minLength="6"
                            placeholder="Confirm Password"
                            required
                            ref={signupPassword2}
                        />
                    </div>

                    <button
                        className="bton"
                        type="submit"
                        name="button"
                        disabled={isFetching}
                    >
                        {isFetching ? <CircularProgress size="20px" /> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         isFetching: state.auth.isFetching,
//         errorLogin: state.auth.errorLogin,
//         errorSignup: state.auth.errorSignup
//     };
// }

// export default connect(mapStateToProps, { login, signup, signupStart })(LoginSignupForms);
export default LoginSignupForms;
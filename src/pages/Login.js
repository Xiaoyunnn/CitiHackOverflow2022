import React from 'react';
import {Navigate} from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoginSignupForms from "../components/loginSignup/LoginSignupForms";
import LoginSignupPanels from "../components/loginSignup/LoginSignupPanels";
import NavbarAuth from "../components/navbar/NavbarAuth";

function Login({ isAuthenticated }) {
    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        <>
            <NavbarAuth />
            <div className="container-main">
                <LoginSignupForms />
                <LoginSignupPanels/>
            </div>
            <Footer />
        </>
    );
}

export default Login;
import React from 'react';
import {Navigate} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import LoginSignupForms from "../../components/loginSignup/LoginSignupForms";
import LoginSignupPanels from "../../components/loginSignup/LoginSignupPanels";

function Login({ isAuthenticated }) {
    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        <>
            {/*<NavbarHome />*/}
            <div className="container-main">
                <LoginSignupForms />
                <LoginSignupPanels/>
            </div>
            <Footer />
        </>
    );
}

export default Login;
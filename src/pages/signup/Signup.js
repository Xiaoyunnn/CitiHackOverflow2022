import React from "react";
import Footer from "../../components/footer/Footer";
import { Navigate } from "react-router-dom";
import LoginSignupForms from "../../components/loginSignup/LoginSignupForms";
import LoginSignupPanels from "../../components/loginSignup/LoginSignupPanels";
import NavbarAuth from "../../components/navbar/NavbarAuth";

function Signup({ isAuthenticated }) {
    if(isAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        <>
            <NavbarAuth />
            <div className="container-main signup-mode">
                <LoginSignupForms />
                <LoginSignupPanels />
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated };
};

export default Signup;

import React from "react";
import "./loginSignup.css";
import successFactors from "./success-factors.svg";
import financialData from "./financial-data.svg";

function LoginSignupPanels() {
    function handleLogin() {
        document.querySelector(".container-main").classList.remove("signup-mode");
    }

    function handleSignup() {
        document.querySelector(".container-main").classList.add("signup-mode");
    }

    return (
        <div className="container-panels">
            <div className="panel signup-panel">
                <div className="content">
                    <h3>New Here?</h3>
                    <p>Enter your personal details and start your journey with us!</p>
                    <button
                        className="bton transparent"
                        id="signup-btn"
                        onClick={handleSignup}
                    >
                        Sign up
                    </button>
                </div>
                <img className="image" src={successFactors} alt="success-factors" />
            </div>

            <div className="panel login-panel">
                <div className="content">
                    <h3>One of Us?</h3>
                    <p>
                        To keep connected with us, please login with your personal details.
                    </p>
                    <button
                        className="bton transparent"
                        id="login-btn"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <img className="image" src={financialData} alt="financial-data" />
            </div>
        </div>
    );
}

export default LoginSignupPanels;

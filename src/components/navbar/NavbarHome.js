import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {dummyData} from "../../data/dummyData";
// import Notifications from "../notifications/Notifications";

//redux
// import { connect } from "react-redux";
// import { logout } from "../../redux/actions/auth";

function NavbarHome({ user, logout }) {
    const [hoverIcon, setHoverIcon] = useState("");

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a
                    className="navbar-brand"
                    id="team-name"
                    href="/"
                    onMouseEnter={() => setHoverIcon("Dashboard")}
                    onMouseLeave={() => setHoverIcon("")}
                    style={{ position: "relative" }}
                >
                    666
                    {hoverIcon === "Main" && (
                        <div className="navbar-hover-icon main">{hoverIcon}</div>
                    )}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Searchbar data={dummyData}/>
                        </li>

                        <li className="nav-item">
                            <div
                                className="nav-link navbar-link-item"
                                onClick={handleLogout}
                                onMouseEnter={() => setHoverIcon("Logout")}
                                onMouseLeave={() => setHoverIcon("")}
                                style={{ position: "relative" }}
                            >
                                {/*<i className="fa-solid fa-arrow-right-from-bracket searchIcon navbar-icon"/>*/}
                                <LogoutIcon className="searchIcon navbar-icon" />
                                <p className="nav-name">Logout</p>
                                {hoverIcon === "Logout" && (
                                    <div className="navbar-hover-icon logout">{hoverIcon}</div>
                                )}
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: "none", position: "relative" }}
                                to={`/profile/${user?.username}`}
                                onMouseEnter={() => setHoverIcon("Profile")}
                                onMouseLeave={() => setHoverIcon("")}
                            >
                                <div className="nav-link navbar-link-item" id="profileDiv">
                                    {user?.profilePicture ?
                                        <img
                                            className="profilePic"
                                            src={user?.profilePicture}
                                            alt="Profile-Pic"
                                        /> :
                                        <AccountCircleIcon className="searchIcon navbar-icon" />
                                    }
                                    <p className="nav-name">
                                        <strong>{user?.username}</strong>
                                    </p>
                                </div>
                                {hoverIcon === "Profile" && (
                                    <div className="navbar-hover-icon profile">{hoverIcon}</div>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.auth.user };
};

// export default connect(mapStateToProps, { logout })(NavbarMain);
export default NavbarHome;

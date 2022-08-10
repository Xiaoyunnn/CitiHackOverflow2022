import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";

//redux
// import { connect } from "react-redux";
// import { fetchAllUser } from "../../redux/actions/user";

function AccountCircleIcon(props) {
    return null;
}

AccountCircleIcon.propTypes = {className: PropTypes.string};

function Searchbar({ fetchAllUser, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [itemEntered, setItemEntered] = useState("");

    //reduxxxx
    // useEffect(() => {
    //     if (userData.length === 0) {
    //         fetchAllUser();
    //     }
    // }, [fetchAllUser]);

    function handleFilter(event) {
        const searchItemName = event.target.value;
        setItemEntered(searchItemName);
        const filteredUsers = data.filter((d) => {
            return d.name.toLowerCase().includes(searchItemName.toLowerCase());
        });

        if (event.target.value === "") {
            setFilteredData([]);
        } else {
            setFilteredData(filteredUsers);
        }
    }

    function handleClear() {
        setItemEntered("");
        setFilteredData([]);
    }

    return (
        <div className="searchbar-wrapper">
            <div className="nav-link searchBar" title="Search">
                {itemEntered === "" ? (
                    <SearchIcon className="searchIcon" />
                ) : (
                    <CloseIcon className="searchIcon" onClick={handleClear} />
                )}
                <input
                    placeholder="Search for companies"
                    value={itemEntered}
                    className="searchInput"
                    onChange={handleFilter}
                ></input>
            </div>
            {filteredData.length === 0 && itemEntered !== "" ? (
                <div className="data-result">
                    <p className="no-user-text">No company with that name exists</p>
                </div>
            ) : (
                <div className="data-result">
                    {filteredData.slice(0, 15).map((u, index) => {
                        return (
                            <Link
                                to={"/profile/" + u.name}
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                key={index}
                            >
                                <div className="data-item">
                                    {u.img ?
                                        <img
                                            alt="profile-pic"
                                            src={u.img}
                                            className="profilePic"
                                        /> :
                                        <AccountCircleIcon className="searchIcon navbar-icon" />
                                    }

                                    <p>{u.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user.searchedUser,
    };
};

// export default connect(mapStateToProps, { fetchAllUser })(Searchbar);
export default Searchbar;

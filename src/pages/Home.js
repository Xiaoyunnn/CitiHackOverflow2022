import React from 'react';
import NavbarHome from "../components/navbar/NavbarHome";
import InvestmentTable from "../components/home/InvestmentTable";

const Home = () => {
    return (
        <div>
            <NavbarHome/>
            <div className="container-std">
                <InvestmentTable/>

            </div>
        </div>
    );
};

export default Home;
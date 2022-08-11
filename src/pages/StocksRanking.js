import React from 'react';
import NavbarHome from "../components/navbar/NavbarHome";
import Footer from "../components/footer/Footer";
import {dummyData} from "../data/dummyData";
import TopGainers from "../components/home/TopGainers";
import {Link} from "react-router-dom";

const StocksRanking = () => {
    return (
        <div>
            <NavbarHome/>
            <div className="container-std">
                <div className="card-container lg">
                    <div className="flex-space-between">
                        <p className="heading-2">Top Gainers</p>
                    </div>
                    {dummyData?.sort((a, b) => b.change - a.change).map((stock, index) => {
                        return (
                            <div className="flex-space-between margin-top-md" key={stock.name + index}>
                                <div className="flex-align-center">
                                    <img src={stock.img} alt={stock.name} className="profile-pic-md"/>
                                    <div>
                                        <p className="text-primary-900">{stock.name}</p>
                                        <p className="text-primary-800">{stock.symbol}</p>
                                    </div>
                                </div>
                                <div className="price-change-wrapper">
                                    <p className="stock-price-text">${stock.price}</p>
                                    <p className={stock.change < 0 ? "text-red" : "text-green"}>{stock.change > 0 && <span className="text-green">+</span>}{stock.change}%</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer/>

        </div>
    );
};

export default StocksRanking;
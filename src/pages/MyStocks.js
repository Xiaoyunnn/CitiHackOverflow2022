import React, { useEffect, useState } from "react";
import NavbarHome from "../components/navbar/NavbarHome";
import Footer from "../components/footer/Footer";
import { getAllStockPrices } from "../api/stocks";
import { dummyData } from "../data/dummyData";
import InvestmentLineGraph from "../components/home/InvestmentLineGraph";

const MyStocks = () => {
    const [stocks, setStocks] = useState(['TSLA', 'AAPL']);
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        // const res = getAllStockPrices(stocks);
        // setCurrent(res);
        // console.log(res);
    }, []);

    return (
        <div>
            <NavbarHome/>
            <div>
                <div className="side-bar-std">
                    <h1 className="heading">My Stocks</h1>
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
                <div className="container-std">
                    <div className="row" style={{ marginLeft: "25%" }}>
                        <InvestmentLineGraph/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyStocks;

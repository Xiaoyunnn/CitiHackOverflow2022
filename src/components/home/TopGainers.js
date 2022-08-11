import React from 'react';
import { Link } from "react-router-dom";

const TopGainers = ({stocks}) => {
    return (
        <div className="card-container md col-lg-4 col-md-12">
            <div className="flex-space-between">
                <p className="heading-2">Top Gainers</p>
                <Link className="see-more-text" to="/stocks-ranking">See More &gt;&gt;</Link>
            </div>
            {stocks?.sort((a, b) => b.change - a.change).map((stock, index) => {
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
    );
};

export default TopGainers;
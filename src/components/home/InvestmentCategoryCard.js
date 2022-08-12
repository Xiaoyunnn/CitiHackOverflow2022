import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useNavigate } from 'react-router-dom';

const InvestmentCategoryCard = ({category, value, rate}) => {
    let navigate = useNavigate();

    const getIcon = () => {
        switch (category) {
            case "Stocks":
                return <ShowChartIcon className="category-icon"/>;
            case "Bonds":
                return <i className="fa-regular fa-coins category-icon"/>;
            case "Crypto":
                return <i className="fa-regular fa-bitcoin-sign category-icon"/>;
            case "ETFs":
                return <CurrencyExchangeIcon className="category-icon" />;
            default:
                return <></>;
        }
    }

    return (
        <div className="card-container sm col-lg-3 col-md-6 col-sm-12" onClick={e => navigate('/my-stocks')}>
            <div className="category-icon-container">
                <div>
                    <p className="subheading-1">{category}</p>
                    <p className="heading-1 margin-bot-sm">${value}</p>
                </div>
                <div className={`category-icon-wrapper ${category.toLowerCase()}`}>
                    {getIcon()}
                </div>
            </div>
            <div>
                <span className={rate < 0 ? "text-red" : "text-green"}>{rate > 0 && <span className="text-green">+</span>}{rate}%</span>
                <span className="text-primary-800 margin-left-sm">yesterday</span>
            </div>

        </div>
    );
};

export default InvestmentCategoryCard;
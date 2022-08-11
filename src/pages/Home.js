import React from 'react';
import NavbarHome from "../components/navbar/NavbarHome";
import InvestmentTable from "../components/home/InvestmentTable";
import InvestmentCategoryCard from "../components/home/InvestmentCategoryCard";
import Footer from "../components/footer/Footer";
import InvestmentLineGraph from "../components/home/InvestmentLineGraph";
import TopGainers from "../components/home/TopGainers";
import {dummyData, news} from "../data/dummyData";
import NewsRow from "../components/home/NewsRow";

const Home = () => {
    return (
        <div>
            <NavbarHome/>
            <div className="container-std">
                <InvestmentTable/>
                {/*<div className={"investment-category-container row"}>*/}
                <div className={"row"}>
                    <InvestmentCategoryCard category={"Stocks"} value={3456.78} rate={-5.33}/>
                    <InvestmentCategoryCard category={"Bonds"} value={3456.78} rate={+2.33}/>
                    <InvestmentCategoryCard category={"Crypto"} value={3456.78} rate={+6.2}/>
                    <InvestmentCategoryCard category={"ETFs"} value={3456.78} rate={-5.31}/>
                </div>
                <div className="row">
                    <InvestmentLineGraph/>
                    <TopGainers stocks={dummyData}/>
                </div>
                <h1 className="heading">Business News</h1>
                <div>
                    {news.map((article, index) => {
                        return (
                            <NewsRow article={article} key={article.title + index}/>
                        );
                    })}
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;
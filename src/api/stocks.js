import axios from "axios";

var url = symbol => `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=CLP27Q3ZR8ZQRZN2`;

export const getAllStockPrices = stocks => {
    const final = [];

    for (let i = 0; i < stocks.length; i++) {
        axios.get(url(stocks[i])).then(res => {
            final.push(res.data);
        });
    }

    return final;
}
  

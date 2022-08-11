import axios from "axios";

const url = (type, query) => `https://newsapi.org/v2/${type}?${query}&apiKey=f3be38be5ce64cf298531ebb561fb4c7`;

export const getGeneralNews = async () => {
    try {
        const news = await axios.get(url("top-headlines","q=business"));
        console.log(news.data.articles);

        return news.data.articles;
    } catch (error) {
        console.log(error);
    }
}

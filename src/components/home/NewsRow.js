import React from 'react';

const NewsRow = ({article}) => {
    return (
        <a className="flex margin-bot-md cursor-pointer" href={article.url} target="_blank" rel="noreferrer">
            <img src={article.urlToImage} alt={article.title} className="article-img"/>
            <div>
                <p className="subheading-2">{article.title}</p>
                <p className="text-primary-900">{article.description}</p>
                <p className="text-primary-800">{article.source.name}</p>
            </div>
        </a>
    );
};

export default NewsRow;
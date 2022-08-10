import React from 'react';
import "./footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="container-footer">
            <p>666 @Citi HackOverflow {year}</p>
        </div>
    );
};

export default Footer;
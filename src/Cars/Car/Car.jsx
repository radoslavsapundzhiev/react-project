import React from 'react';
import './Car.css';

function Car({ title, imageUrl, brand, author, fuel, year, price }) {
    return <div className="listing">
        <p>{title}</p>
        <img src={imageUrl} alt="carImage" />
        <h2>Brand: {brand}</h2>
        <div className="info">
            <div id="data-info">
                <h3>Seller: {author}</h3>
                <h3>Fuel: {fuel}</h3>
                <h3>Year: {year}</h3>
                <h3>Price: {price}</h3>
            </div>
            <div id="data-buttons">
                <ul>
                    <li className="action">
                        <a href="/details" className="button-carDetails">Details</a>
                    </li>
                    <li className="action">
                        <a href="/edit" className="button-carDetails">Edit</a>
                    </li>
                    <li className="action">
                        <a href="/delete" className="button-carDetails">Delete</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default Car;
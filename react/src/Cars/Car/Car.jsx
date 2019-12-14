import React from 'react';
import './Car.css';

function Car({ id, title, imageUrl, brand, author, fuel, year, price, isLogged, isAuthor }) {
    const url = `detail/${id}`;
    const editCarUrl = `/edit/${id}`;
    const deleteCarUrl = `/delete/${id}`;
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
                        <a href={url} className="button-carDetails">Details</a>
                    </li>
                    <li className="action">
                        {isAuthor && <a href={editCarUrl} className="button-carDetails">Edit</a>}
                    </li>
                    <li className="action">
                        {isAuthor && <a href={deleteCarUrl} className="button-carDetails">Delete</a>}
                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default Car;
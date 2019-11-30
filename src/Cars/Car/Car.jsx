import React from 'react';
import './Car.css';
import Link from '../../shared/Link/Link';

function Car({ title, imageUrl, brand, seller, fuel, year, price }) {
    return <div className="listing">
        <p>{title}</p>
        <img src={imageUrl} alt="carImage" />
        <h2>Brand: {brand}</h2>
        <div className="info">
            <div id="data-info">
                <h3>Seller: {seller}</h3>
                <h3>Fuel: {fuel}</h3>
                <h3>Year: {year}</h3>
                <h3>Price: {price}</h3>
            </div>
            <div id="data-buttons">
                <ul>
                    <li className="action">
                        <Link href="#" className="button-carDetails">Details</Link>
                    </li>
                    <li className="action">
                        <Link href="#" className="button-carDetails">Edit</Link>
                    </li>
                    <li className="action">
                        <Link href="#" className="button-carDetails">Delete</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default Car;
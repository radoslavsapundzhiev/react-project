import React from 'react';

import './Detail.css';
import carService from '../../service/car-service';

export default class Detail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            car: null
        };
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;
        carService.detail(id).then(car => {
            this.setState({ car });
        });
    }

    render() {
        const { car } = this.state;
        let isLogged = this.props.isLogged;
        return car && <div className="listing-details">
            <div className="my-listing-details">

                <p id="auto-title">{car.title}</p>

                <img src={car.imageUrl}></img>

                <div className="listing-props">
                    <h2>Brand: {car.brand}</h2>
                    <h3>Model: {car.model}</h3>
                    <h3>Year: {car.year}</h3>
                    <h3>Fuel: {car.fuel}</h3>
                    <h3>Price: {car.price}$</h3>
                </div>

                <div className="listings-buttons">
                    {isLogged && <a href="/edit" className="button-list">Edit</a>}
                    {isLogged && <a href="/delete" className="button-list">Delete</a>}
                    <a href="/all" className="button-list">Back</a>
                </div>
                <p id="description-title">Description:</p>
                <p id="description-para">{car.description}</p>
            </div>
        </div>
    }

}
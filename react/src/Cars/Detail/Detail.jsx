import React from 'react';

import './Detail.css';
import carService from '../../service/car-service';

export default class Detail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            car: null,
            isAuthor: false
        };
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;
        carService.detail(id).then(car => {
            let isAuthor = car.author.username === this.props.username ? true : false;
            this.setState({ car, isAuthor });
        });
    }

    render() {
        const { car, isAuthor } = this.state;
        return car && <div className="listing-details">
            <div className="my-listing-details">

                <p id="auto-title">{car.title}</p>

                <img src={car.imageUrl} alt=""></img>

                <div className="listing-props">
                    <h2>Brand: {car.brand}</h2>
                    <h3>Model: {car.model}</h3>
                    <h3>Year: {car.year}</h3>
                    <h3>Fuel: {car.fuel}</h3>
                    <h3>Price: {car.price}$</h3>
                </div>

                <div className="listings-buttons">
                    {isAuthor && <a href="/edit" className="button-list">Edit</a>}
                    {isAuthor && <a href="/delete" className="button-list">Delete</a>}
                    <a href="/all" className="button-list">Back</a>
                </div>
                <p id="description-title">Description:</p>
                <p id="description-para">{car.description}</p>
            </div>
        </div>
    }

}
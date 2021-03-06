import React from 'react';
import './Cars.css';
import Car from './Car/Car';
import carService from '../service/car-service';

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: null
        }
    }

    componentDidMount() {
        carService.load(null, this.props.limit).then(cars => {
            this.setState({ cars });
        })
    }

    render() {
        const { cars } = this.state;

        return <div id="car-listings">
            <h1>Car Listings</h1>
            {cars ? 
                <div id="listings">
                    {cars.map((car) => <Car key={car._id} id={car._id} isAuthor={car.author.username === this.props.username ? true : false} isLogged={this.props.isLogged} title={car.title} imageUrl={car.imageUrl} brand={car.brand} author={car.author.username} fuel={car.fuel} year={car.year} price={car.price}></Car>)}
                </div> : <div>Loading...</div>
            }
        </div>
    }
}

export default Cars;

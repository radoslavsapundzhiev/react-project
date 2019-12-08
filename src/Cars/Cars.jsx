import React from 'react';
import './Cars.css';
import Car from './Car/Car';
import carServise from '../service/car-service';

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: null
        }
    }

    componentDidMount() {
        carServise.load(null, this.props.limit).then(cars => {
            this.setState({ cars });
        })
    }

    render() {
        const { cars } = this.state;

        return <div id="car-listings">
            <h1>Car Listings</h1>
            {cars ? 
                <div id="listings">
                    {cars.map((car) => <Car key={car._id} title={car.title} imageUrl={car.imageUrl} brand={car.brand} author={car.author.username} fuel={car.fuel} year={car.year} price={car.price}></Car>)}
                </div> : <div>Loading...</div>
            }
            {/* <div id="listings"> 
                <Car
                    title="Audi a3 много запазено"
                    imageUrl="https://i.imgur.com/drIOsYl.jpg"
                    brand="Audi"
                    seller="kunio"
                    fuel="Gasoline"
                    year="1998"
                    price="2500 $"
                />
                <Car
                    title="Audi a3 много запазено"
                    imageUrl="https://i.imgur.com/drIOsYl.jpg"
                    brand="Audi"
                    seller="kunio"
                    fuel="Gasoline"
                    year="1998"
                    price="2500 $"
                />
                <Car
                    title="Audi a3 много запазено"
                    imageUrl="https://i.imgur.com/drIOsYl.jpg"
                    brand="Audi"
                    seller="kunio"
                    fuel="Gasoline"
                    year="1998"
                    price="2500 $"
                />
                <Car
                    title="Audi a3 много запазено"
                    imageUrl="https://i.imgur.com/drIOsYl.jpg"
                    brand="Audi"
                    seller="kunio"
                    fuel="Gasoline"
                    year="1998"
                    price="2500 $"
                />
            </div> */}
        </div>
    }
}

export default Cars;

import React from 'react';
import '../Cars.css';
import Car from '../Car/Car';
import carService from '../../service/car-service';

class MyCars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cars: null
        }
    }

    componentDidMount(){
        carService.myCars().then((cars) => {
            this.setState({ cars });
        });      
    };

    render(){
        const { cars } = this.state;
        console.log(this.props.isLogged);
        return <div id="car-listings">
                    <h1>My Car Listings</h1>
                    {cars ? 
                        <div id="listings">
                            {cars.map((car) => <Car key={car._id} id={car._id} isAuthor={car.author.username === this.props.username ? true : false} title={car.title} imageUrl={car.imageUrl} brand={car.brand} author={car.author.username} fuel={car.fuel} year={car.year} price={car.price}></Car>)}
                        </div> : <div>Loading...</div>
                    }
                </div>
    }
}

export default MyCars;
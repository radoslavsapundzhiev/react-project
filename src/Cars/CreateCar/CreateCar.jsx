import React from 'react';
import carService from '../../service/car-service';
import './CreateCar.css';

class CreateCar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div id="create-listing">
            <form>
                <div className="container">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr/>

                    <p>Title</p>
                    <input type="text" placeholder="Enter Title" name="title"/>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description"/>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand"/>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model"/>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year"/>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl"/>

                    <p>Car Fuel Type</p>
                    <input type="text" placeholder="Enter Car Fuel Type" name="fuelType"/>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price"/>

                    <hr/>
                    <button type="button" className="registerbtn">Create</button>
                </div>
            </form>
        </div>
    }
}

export default CreateCar;
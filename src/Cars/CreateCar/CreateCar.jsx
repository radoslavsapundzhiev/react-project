import React from 'react';
import * as yup from 'yup';

import carService from '../../service/car-service';
import withForm from '../../shared/hocs/withForm';
import './CreateCar.css';

class CreateCar extends React.Component{
    titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
    descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
    brandOnChangeHandler = this.props.controlChangeHandlerFactory('brand');
    modelOnChangeHandler = this.props.controlChangeHandlerFactory('model');
    yearOnChangeHandler = this.props.controlChangeHandlerFactory('year');
    imageUrlOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
    fuelOnChangeHandler = this.props.controlChangeHandlerFactory('fuel');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');
    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        carService.create(data).then(() => {
          this.props.history.push('/');
        });
      };
    render(){
        return <div id="create-listing">
            <form>
                <div className="container">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr/>

                    <p>Title</p>
                    <input type="text" onChange={this.titleOnChangeHandler} placeholder="Enter Title" name="title"/>

                    <p>Description</p>
                    <input type="text" onChange={this.descriptionOnChangeHandler} placeholder="Enter Description" name="description"/>

                    <p>Car Brand</p>
                    <input type="text" onChange={this.brandOnChangeHandler} placeholder="Enter Car Brand" name="brand"/>

                    <p>Car Model</p>
                    <input type="text" onChange={this.modelOnChangeHandler} placeholder="Enter Car Model" name="model"/>

                    <p>Car Year</p>
                    <input type="number" onChange={this.yearOnChangeHandler} placeholder="Enter Car Year" name="year"/>

                    <p>Car Image</p>
                    <input type="text" onChange={this.imageUrlOnChangeHandler} placeholder="Enter Car Image" name="imageUrl"/>

                    <p>Car Fuel Type</p>
                    <input type="text" onChange={this.fuelOnChangeHandler} placeholder="Enter Car Fuel Type" name="fuelType"/>

                    <p>Car Price</p>
                    <input type="number" onChange={this.priceOnChangeHandler} placeholder="Enter Car Price" name="price"/>

                    <hr/>
                    <button type="button" onClick={this.submitHandler} className="registerbtn">Create</button>
                </div>
            </form>
        </div>
    }
}

const initialFormState = {
    title: '',
    description: '',
    brand: '',
    model: '',
    year: '',
    imageUrl: '',
    fuel: '',
    price: ''
  };
  
  const schema = yup.object({
    title: yup.string('Title shoud be a string')
      .required('Title is required')
      .min(4, 'Title should be more than 4 chars'),

    description: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    brand: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    model: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    year: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    imageUrl: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    fuel: yup.string('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars'),

    price: yup.number('Title shoud be a string')
    .required('Title is required')
    .min(4, 'Title should be more than 4 chars')
  });
  

export default withForm(CreateCar, initialFormState, schema);
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import carService from '../../service/car-service';
import './EditCar.css';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .max(33, 'Too Long!')
    .required('Required'),

  description: Yup.string()
    .min(30, 'Too Short!')
    .max(450, 'Too Long!')
    .required('Required'),

  brand: Yup.string()
    .max(11, 'Too Long!')
    .required('Required'),

  model: Yup.string()
    .max(11, 'Too Long!')
    .required('Required'),

  year: Yup.number()
    // .test("year", "The year must be only 4 chars long!", val => {
    //   return  /\d{0,4}/.test(val);
    // })
    .required('Required'),
  
  imageUrl: Yup.string()
    .test("imageUrl", "Link url should always start with http!", val => {
      return  /^http/.test(val);
    })
    .required('Required'),

  fuel: Yup.string()
    .max(11, 'Too Long!')
    .required('Required'),
    
  price: Yup.number()
      .min(1000, 'The minimum price is 1000$!')
      .max(1000000, 'The maximum price is 1000000$!')
      .required('Required'),
    
});

class EditCar extends Component {
  defaultFormState = {
    title: '',
    description: '',
    brand: '',
    model: '',
    year: 0,
    imageUrl: '',
    fuel: '',
    price: 0
  }

  state = {
    title: '',
    description: '',
    brand: '',
    model: '',
    year: 0,
    imageUrl: '',
    fuel: '',
    price: 0
  }

  componentDidMount(){  
    const id = this.props.match.params.id;
    carService.detail(id).then(combinedData => {
        const car = combinedData["apiRequestDetail"];
        this.setState({
            title: car.title,
            description: car.description,
            brand: car.brand,
            model: car.model,
            year: car.year,
            imageUrl: car.imageUrl,
            fuel: car.fuel,
            price: car.price
        });
    });
  }


  handleSubmit = (form) => {
    const id = this.props.match.params.id;
    carService.edit(form, id).then(() =>{
      this.props.history.push('/all');
    }).catch(console.error);
  }
  render() { 
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={this.state}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        {() => (
          <div id="create-listing">
            <Form className="container">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit a car listing.</p>
                <hr/>
                <Field
                  name="title"
                  type="text"
                  placeholder="title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                />
                <Field
                  name="description"
                  type="text"
                  placeholder="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                />
                <Field
                  name="brand"
                  type="text"
                  placeholder="brand"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                />
                <Field
                  name="model"
                  type="text"
                  placeholder="model"
                />
                <ErrorMessage
                  name="model"
                  component="div"
                />
                <Field
                  name="year"
                  type="number"
                  placeholder="year"
                />
                <ErrorMessage
                  name="year"
                  component="div"
                />
                <Field
                  name="imageUrl"
                  type="text"
                  placeholder="imageUrl"
                />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                />
                <Field
                  name="fuel"
                  type="text"
                  placeholder="fuel"
                />
                <ErrorMessage
                  name="fuel"
                  component="div"
                />
                <Field
                  name="price"
                  type="number"
                  placeholder="price"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                />
                <button type="submit" className="registerbtn">
                  Submit
                </button>
            </Form>
          </div>
  )}
      </Formik>
    )
  }
}

 
export default EditCar;
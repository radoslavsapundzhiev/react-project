import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import carService from '../../service/car-service';
import './CreateCar.css';
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

class CreateCar extends Component {
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
  handleSubmit = (form) => {
    carService.create(form).then(() =>{
      this.props.history.push('/all');
    }).catch(console.error);
  }
  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={this.defaultFormState}
        validationSchema={SignupSchema}
      >
        {() => (
          <div id="create-listing">
            <Form className="container">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create a car listing.</p>
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

 
export default CreateCar;


// ---------------------------------------------------------------------------------------------------------
// import React from 'react';
// import * as yup from 'yup';

// import carService from '../../service/car-service';
// import withForm from '../../shared/hocs/withForm';
// import './CreateCar.css';

// class CreateCar extends React.Component{
//     titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
//     descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
//     brandOnChangeHandler = this.props.controlChangeHandlerFactory('brand');
//     modelOnChangeHandler = this.props.controlChangeHandlerFactory('model');
//     yearOnChangeHandler = this.props.controlChangeHandlerFactory('year');
//     imageUrlOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
//     fuelOnChangeHandler = this.props.controlChangeHandlerFactory('fuel');
//     priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');
//     submitHandler = () => {
//         const errors = this.props.getFormErrorState();
//         if (!!errors) { return; }
//         const data = this.props.getFormState();
//         carService.create(data).then(() => {
//           this.props.history.push('/');
//         });
//       };
//     render(){
//         return <div id="create-listing">
//             <form>
//                 <div className="container">
//                     <h1>Create Car Listing</h1>
//                     <p>Please fill in this form to create an listing.</p>
//                     <hr/>

//                     <p>Title</p>
//                     <input type="text" onChange={this.titleOnChangeHandler} placeholder="Enter Title" name="title"/>

//                     <p>Description</p>
//                     <input type="text" onChange={this.descriptionOnChangeHandler} placeholder="Enter Description" name="description"/>

//                     <p>Car Brand</p>
//                     <input type="text" onChange={this.brandOnChangeHandler} placeholder="Enter Car Brand" name="brand"/>

//                     <p>Car Model</p>
//                     <input type="text" onChange={this.modelOnChangeHandler} placeholder="Enter Car Model" name="model"/>

//                     <p>Car Year</p>
//                     <input type="number" onChange={this.yearOnChangeHandler} placeholder="Enter Car Year" name="year"/>

//                     <p>Car Image</p>
//                     <input type="text" onChange={this.imageUrlOnChangeHandler} placeholder="Enter Car Image" name="imageUrl"/>

//                     <p>Car Fuel Type</p>
//                     <input type="text" onChange={this.fuelOnChangeHandler} placeholder="Enter Car Fuel Type" name="fuelType"/>

//                     <p>Car Price</p>
//                     <input type="number" onChange={this.priceOnChangeHandler} placeholder="Enter Car Price" name="price"/>

//                     <hr/>
//                     <button type="button" onClick={this.submitHandler} className="registerbtn">Create</button>
//                 </div>
//             </form>
//         </div>
//     }
// }

// const initialFormState = {
//     title: '',
//     description: '',
//     brand: '',
//     model: '',
//     year: '',
//     imageUrl: '',
//     fuel: '',
//     price: ''
//   };
  
//   const schema = yup.object({
//     title: yup.string('Title shoud be a string')
//       .required('Title is required')
//       .min(4, 'Title should be more than 4 chars'),

//     description: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     brand: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     model: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     year: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     imageUrl: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     fuel: yup.string('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars'),

//     price: yup.number('Title shoud be a string')
//     .required('Title is required')
//     .min(4, 'Title should be more than 4 chars')
//   });
  

// export default withForm(CreateCar, initialFormState, schema);
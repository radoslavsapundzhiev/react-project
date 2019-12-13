import React, { Component } from 'react';
import './CreateComment.css';

import commentService from '../../service/comment-service';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .max(33, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(30, 'Too Short!')
      .max(450, 'Too Long!')
      .required('Required'),
  });

class CreateComment extends Component {
    defaultFormState = {
      title: '',
      description: ''
    }
    
    handleSubmit = (form) => {
        const id = this.props.match.params.id;
        const url = `/detail/${id}`;
        commentService.create(form, id).then(() =>{
        this.props.history.push(url);
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
            <div>
              <Form className="container">
                  <h1>Comment</h1>
                  <p>Please fill in this form to create a comment.</p>
                  <hr/>
                <Field
                  name="title"
                  type="text"
                  placeholder="Title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                />
                <Field
                  name="description"
                  type="text"
                  placeholder="Here write your comment"
                />
                <ErrorMessage
                  name="description"
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
  
   
export default CreateComment;  

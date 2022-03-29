import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container, FormWrap, Icon, FormButton, FormContent, FormH1, FormInput, FormLabel } from './SignUpPageElements'
import ScrollToTop from '../ScrollToTop'
import * as Yup from "yup";
import axios from "axios";
import './SignUp.css'


import { useNavigate } from "react-router-dom";


const SignUpPage = () => {

  //function to redirect to home page
  const navigate = useNavigate();

  //set as empty
  const initialValues = {
    username: "",
    password: "",
  };

  //data validation
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  //when user signs up, data is received
  const onSubmit = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <Icon to="/" >Orange</Icon>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer ">      

          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="registration"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="registration"
            name="password"
            placeholder="Your Password..."
          />

          <button type="submit" className="sign-btn"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}




export default SignUpPage
import React from 'react'
//import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from '../Footer/Footer'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormInput, FormLabel } from './SignUpPageElements'

const SignUpPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Orange Tech</Icon>

          <FormContent>
            <Form action="#">
              <FormH1>Sign Up</FormH1>
<<<<<<< HEAD

              <FormLabel htmlFor='for'>Username</FormLabel>

=======
              <FormLabel htmlFor='for'>First and Last Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
>>>>>>> ad1285d2734d0aec9199d98a131c02706b384607
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Register</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  )


}



export default SignUpPage
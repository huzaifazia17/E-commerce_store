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

              <FormLabel htmlFor='for'>Username</FormLabel>

              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  )


}



export default SignUpPage
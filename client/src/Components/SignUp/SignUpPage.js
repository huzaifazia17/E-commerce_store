import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Container, FormWrap, Icon, FormButton, FormContent, FormH1, FormInput, FormLabel } from './SignUpPageElements'

const SignUpPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Orange</Icon>
                
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
    </>
  )


}



export default SignUpPage
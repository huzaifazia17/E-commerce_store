import React from 'react'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormInput, FormLabel } from './SignInPageElements'

const SignInPage = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">Orange</Icon>
                
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In To Your Account</FormH1>

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput trype='email' required/>
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

export default SignInPage
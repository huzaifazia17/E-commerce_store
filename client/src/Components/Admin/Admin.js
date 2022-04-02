import React from 'react'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormH3, FormInput, FormLabel } from './AdminPageElements'

const Admin = () => {
  return (
      <div>
          <Container>
        <FormWrap>
                  <Icon to="/">Orange</Icon>
                   <FormContent>
                      <Form action="#">
              <FormH1>Admin Page</FormH1>
                          

                          <FormButton> Edit product database </FormButton>
                          <div>
                              .
                          </div>
                          <FormButton> Edit website </FormButton>
                          <div>
                              .
                          </div>
                          <FormButton> Edit coupons </FormButton>
                      </Form>
                      </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default Admin
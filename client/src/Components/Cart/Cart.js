import React from 'react'
import './Cart.css'
import Footer from '../Footer/Footer'
import { Container, Icon } from '../SignIn/SignInPageElements'

const Cart = () => {
    return (
        <>
            <Container>
                <Icon to="/">Orange Tech</Icon>
                <div className="cart-container">
                    <div>cartPage</div>


                </div>
            </Container>
            <Footer />
        </>


    )
}

export default Cart
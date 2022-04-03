import React from 'react'
import './products.css'
import Footer from '../Footer/Footer'
import { Container, Icon } from '../SignIn/SignInPageElements'

const ProductsPage = () => {
    return (
        <>
            <Container>
                <Icon to="/">Orange Tech</Icon>
                <div className="products-container">
                    <div>productsPage</div>
                    <div>productsPage</div>
                    <div>productsPage</div>
                    <div>productsPage</div>
                    <div>productsPage</div>
                    <div>productsPage</div>


                </div>
            </Container>
            <Footer />
        </>



    )
}

export default ProductsPage
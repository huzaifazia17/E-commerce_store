import React from 'react'
import Icon1 from '../../Images/pic1.png'
import Icon2 from '../../Images/pic2.png'
import Icon3 from '../../Images/pic3.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id = "services">
        <ServicesH1>Our Services</ServicesH1>\

        <ServicesWrapper>

            <ServicesCard>
                <ServicesIcon src = {Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help to put animals under happy homes and love to see them happy</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src = {Icon2}/>
                <ServicesH2>Cool products</ServicesH2>
                <ServicesP>Best animals for the low!</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src = {Icon3}/>
                <ServicesH2>Quick Delivery</ServicesH2>
                <ServicesP>Runs to you the moment you press buy</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
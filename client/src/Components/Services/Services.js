import React from 'react'
import Icon1 from '../../Images/pic1.png'
import Icon2 from '../../Images/pic2.png'
import Icon3 from '../../Images/pic3.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id = "services">
        <ServicesH1>Cutomer Reviews</ServicesH1>

        <ServicesWrapper>

            <ServicesCard>
                <ServicesIcon src = {Icon1}/>
                <ServicesH2>William DeVoe</ServicesH2>
                <ServicesP>My laptop arrived in the time given and was in perfect condition! I could not find a better deal anywhere else. Highly recommend!</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src = {Icon2}/>
                <ServicesH2>Ashley Smith</ServicesH2>
                <ServicesP>I needed a camera for my vacation trip and needed it ASAP. Thanks to Orange Tech I was able to enjoy my trip. Thanks Orange Tech!</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src = {Icon3}/>
                <ServicesH2>Raj Kuresh Singh</ServicesH2>
                <ServicesP>I needed to get a new hard drive with a lot of storage for my computer. Thankfully they had exactly what I was looking for!</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
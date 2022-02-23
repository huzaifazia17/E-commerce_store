import React, {useState} from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/HeroSection/Hero'
import { homeObjOne , homeObjTwo , homeObjThree } from '../Components/InfoSection/Data'
import Info from '../Components/InfoSection/Info'
import NavBar from '../Components/NavBar/NavBar'
import Services from '../Components/Services/Services'
import SideBar from '../Components/SideBar/SideBar'

const Pages = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>
    {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <SideBar isOpen = {isOpen} toggle = {toggle}/>
        <NavBar toggle = {toggle}/>
        <Hero />
        <Info {...homeObjOne}/>
        <Info {...homeObjTwo}/>
        <Services />
        <Info {...homeObjThree}/>
        <Footer />
    </>
  )
}

export default Pages
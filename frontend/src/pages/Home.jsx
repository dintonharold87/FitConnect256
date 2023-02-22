import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Faqs from '../components/Faqs'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
    <HeroSection />
    <About />
    <Faqs />
    <Contact />
    </>
  )
}

export default Home
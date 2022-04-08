//Functional Component
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Aboutme from './components/aboutme/Aboutme'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Aboutme />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App
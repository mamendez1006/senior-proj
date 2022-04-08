import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/selfie.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      {/*from general style
      this naming convention is called bim*/}
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Michael Luo</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <HeaderSocials/>
         <CTA/>
        
        <div className='me'>
          <img src = {ME} alt = "me"/>
        </div>

        
      </div>
    </header>
  )
}

export default header
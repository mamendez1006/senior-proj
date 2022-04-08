import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {ImYoutube} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "https://linked.com" target = "_blank"><BsLinkedin/></a>
        <a href = "https://github.com" target = "_blank"><ImGithub/></a>
        <a href = "https://youtube.com" target = "_blank"><ImYoutube/></a>
    </div>
  )
}

export default HeaderSocials
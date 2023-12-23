import React from 'react'
import Logo from "../asset/Logo.png"

const CompanyLogoFile = () => {
  return (
    <div id='logo-design-container' className='logo-design-container'>
        <img src={Logo}/>
        <i class='bx bx-menu' style={{fontSize:"24px"}}></i>
    </div>
  )
}

export default CompanyLogoFile
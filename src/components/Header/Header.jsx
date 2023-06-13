import React from 'react'
import './Header.css'
const Header = ({title = '', subTitle = ''}) => {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <p className='header__subtitle'>{subTitle}</p>
    </header>
  )
}

export default Header
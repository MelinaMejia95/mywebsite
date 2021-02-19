import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './Header.scss'
import { Dropdown } from '../Dropdown'
import photo from '../../assets/images/Me.png'

const Header = () => {
  const { t } = useTranslation()
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false)

  const toogleMobileNavVisibility = () => setMobileNavVisibility(!mobileNavVisibility)

  return (
    <>
      {mobileNavVisibility && (
        <div className='backdrop' onClick={toogleMobileNavVisibility}></div>
      )}
      <div className='tooble-button-container'>
        <div className='toggle-button' onClick={toogleMobileNavVisibility}>
          <input type="checkbox" checked={mobileNavVisibility} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='header-container'>
        <div className='left-content'>
          <img src={photo} alt="Melina's photo" />
        </div>
        <div className='right-content'>
        </div>
        <nav className='main-nav'>
          <ul>
            <li >
              <Link to='/'>{t('aboutLink')}</Link>
              <Link to='/talks'>{t('talksLink')}</Link>
              <Link to='/art'>{t('artLink')}</Link>
              <Link to='/volunteering'>{t('volunteeringLink')}</Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
      </div>
      <nav className={`mobile-nav ${mobileNavVisibility ? 'open' : ''}`}>
        <ul className='mobile-nav__items'>
          <li className='mobile-nav__item'>
            <Link to={'/'} onClick={toogleMobileNavVisibility}>
              {t('aboutLink')}
            </Link>
          </li>
          <li className='mobile-nav__item'>
            <Link to={'/talks'} onClick={toogleMobileNavVisibility}>
              {t('talksLink')}
            </Link>
          </li>
          <li className='mobile-nav__item'>
            <Link to={'/art'} onClick={toogleMobileNavVisibility}>
              {t('artLink')}
            </Link>
          </li>
          <li className='mobile-nav__item'>
            <Link to={'/volunteering'} onClick={toogleMobileNavVisibility}>
              {t('volunteeringLink')}
            </Link>
          </li>
          <li className='mobile-nav__item'>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header

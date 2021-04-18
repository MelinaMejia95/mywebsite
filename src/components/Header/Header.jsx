import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

import './Header.scss'
import { Dropdown } from '../Dropdown'
import photo from '../../assets/images/Me.png'
import spainFlag from '../../assets/icons/spain.png'
import southKoreaFlag from '../../assets/icons/south-korea.png'
import usaFlag from '../../assets/icons/usa.png'

const Header = () => {
  const { t } = useTranslation()
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false)

  const toogleMobileNavVisibility = () => setMobileNavVisibility(!mobileNavVisibility)

  const changeLanguage = (language) => {
    i18next.changeLanguage(language)
  }

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
          <Link to='/'>
            <img src={photo} alt="Melina's photo" />
          </Link>
          <nav className='main-nav'>
            <ul>
              <li >
                <Link to='/skills'>{t('skillsLink')}</Link>
                <Link to='/talks'>{t('talksLink')}</Link>
                <Link to='/art'>{t('artLink')}</Link>
                <Link to='/volunteering'>{t('volunteeringLink')}</Link>
              </li>
              <li>
                <button className='flagsButton' onClickCapture={() => changeLanguage('es')}>
                  <img src={spainFlag} alt='Spain flag' />
                </button>
                <button className='flagsButton' onClickCapture={() => changeLanguage('en')}>
                  <img src={usaFlag} alt='USA flag' />
                </button>
                <button className='flagsButton' onClickCapture={() => changeLanguage('kr')}>
                  <img src={southKoreaFlag} alt='South Korea flag' />
                </button>
                <Dropdown customClass='desktopDropdown' />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className={`mobile-nav ${mobileNavVisibility ? 'open' : ''}`}>
        <ul className='mobile-nav__items'>
          <li className='mobile-nav__item'>
            <Link to={'/skills'} onClick={toogleMobileNavVisibility}>
              {t('skillsLink')}
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

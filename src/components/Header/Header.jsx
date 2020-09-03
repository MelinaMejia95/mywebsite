import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { Dropdown } from '../Dropdown';
import photo from '../../assets/images/me.png';
import { navItemsPreset } from '../../constants/navItemsConstants';

const Header = () => {
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false)

  const toogleMobileNavVisibility = () => {
    setMobileNavVisibility(!mobileNavVisibility)
  }

  return (
    <>
      {mobileNavVisibility && (
        <div className='backdrop' onClick={toogleMobileNavVisibility}></div>
      )}
      <div className='header-container'>
        <div className='left-content'>
          <div className='toggle-button' onClick={toogleMobileNavVisibility}>
            <input type="checkbox" checked={mobileNavVisibility} />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={photo} alt="Melina's photo" />
        </div>
        <div className='img-container'></div>
        <nav className='main-nav'>
          <ul>
            {navItemsPreset.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.description}</Link>
                </li>
              )
            })}
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
      </div>
      <nav className={`mobile-nav ${mobileNavVisibility ? 'open' : ''}`}>
        <ul className='mobile-nav__items'>
          {navItemsPreset.map((item, index) => {
            return (
              <li className='mobile-nav__item' key={index}>
                <Link to={item.link} onClick={toogleMobileNavVisibility}>
                  {item.description}
                </Link>
              </li>
            )
          })}
          <li className='mobile-nav__item'>
            <Dropdown />
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Header;

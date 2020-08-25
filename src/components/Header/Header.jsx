import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { Dropdown } from '../Dropdown';
import photo from '../../assets/images/me.jpg';

const Header = () => {
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false);

  const toogleMobileNavVisibility = () => {
    setMobileNavVisibility(!mobileNavVisibility);
  }

  return (
    <>
      {mobileNavVisibility && <div className='backdrop' onClick={toogleMobileNavVisibility}></div>}
      <div className='header-container'>
        <button onClick={toogleMobileNavVisibility}>
          <img src={photo} alt="Melina's photo" />
        </button>
        <div className='img-container'></div>
        <nav className='main-nav'>
          <ul>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/talks'>Talks</Link>
            </li>
            <li>
              <Link to='/art'>Art</Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
      </div>
      <nav className={`mobile-nav ${mobileNavVisibility ? 'open' : ''}`}>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to='/' onClick={toogleMobileNavVisibility}>About</Link>
          </li>
          <li className="mobile-nav__item">
            <Link to='/talks' onClick={toogleMobileNavVisibility}>Talks</Link>
          </li>
          <li className="mobile-nav__item">
            <Link to='/art' onClick={toogleMobileNavVisibility}>Art</Link>
          </li>
          <li className="mobile-nav__item">
            <Dropdown />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;

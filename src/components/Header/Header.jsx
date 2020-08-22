import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { Dropdown } from '../Dropdown';
import photo from '../../assets/images/me.jpg';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={photo} alt="Melina's photo" />
      <div className='img-container'></div>
      <nav>
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
  )
}

export default Header;

import React from 'react';

import './Header.scss';
import photo from '../../assets/images/me.jpg';

const Header = () => {
  return (
    <div className="header-container">
      <img src={photo} alt="Melina's photo"/>
      <div className="img-container">
      </div>
      <nav>
        <ul>
          <li>
            <a href="http:/google.com">About</a>
          </li>
          <li>
            <a href="http:/google.com">Talks</a>
          </li>
          <li>
            <a href="http:/google.com">Art</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;

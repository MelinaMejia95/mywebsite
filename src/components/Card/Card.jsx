import React from 'react';

import './Card.scss';

const Card = ({
  year,
  title,
  photo,
  link,
  slides
}) => {
  return (
    <div className='card-container'>
      <div className='title-container'>
        <label>{year} - {title}</label>
      </div>
      <div className='image-container'>
        <img src={photo} alt="Melina's photo" />
      </div>
      <div className='link-container'>
        {link &&
          <a href={link}>Video</a>
        }
        {slides &&
          <a href={slides}>Slides</a>
        }
      </div>
    </div>
  )
};

export default Card;

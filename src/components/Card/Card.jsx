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
      <div className='image-container'>
        <img src={photo} alt="Melina's photo" />
      </div>
      <div className='description-container'>
        <label>{year} - {title}</label>
        <hr/>
        <div className='links-container'>
          {link &&
            <a href={link}>Video</a>
          }
          {slides &&
            <a href={slides}>Slides</a>
          }
        </div>
      </div>
    </div>
  )
};

export default Card;

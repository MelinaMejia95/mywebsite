import React from 'react'

import './Card.scss'

const Card = ({
  title,
  photo,
  link
}) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={photo} alt="Melina's photo" />
      </div>
      <div className='description-container'>
        <a href={link}>{title}</a>
      </div>
    </div>
  )
}

export default Card

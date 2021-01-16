import React from 'react'

import './Card.scss'

export const CustomCard = ({
  imgSource,
  title,
  description
}) => {
  return (
    <div>
      <img src={imgSource} alt={title}/>
      <label>{title}</label>
      <label>{description}</label>
    </div>
  )
}

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

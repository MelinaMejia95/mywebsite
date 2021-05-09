import React from 'react'

import './Card.scss'

export const CustomCard = ({
  imgSource,
  title,
  description,
  date
}) => {
  return (
    <div className='custom-card-container'>
      <img src={imgSource} alt={title}/>
      <div className='description-container'>
        <label className='title'>{title}</label>
        <label className='date'>{date}</label>
        <label className='description'>{description}</label>
      </div>
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

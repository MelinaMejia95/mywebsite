import React from 'react'

import { Card } from '../Card'
import './SectionList.scss'

const SectionList = ({
  title,
  items
}) => {
  return (
    <div className='section-list-container'>
      <h2>{title}</h2>
      {items.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            photo={item.imgSource}
            link={item.link}
          />
        )
      })}
    </div>
  )
}

export default SectionList

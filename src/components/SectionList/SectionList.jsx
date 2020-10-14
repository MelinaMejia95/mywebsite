import React from 'react';

import { Card } from '../Card';
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
            year={item.year}
            title={item.title}
            photo={item.imageUrl}
            link={item.link}
            slides={item.slides}
          />
        )
      })}
    </div>
  )
};

export default SectionList;

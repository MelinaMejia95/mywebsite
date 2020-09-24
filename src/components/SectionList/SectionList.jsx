import React from 'react';

import { Card } from '../Card';

const SectionList = ({
  title,
  items
}) => {
  return (
    <div>
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

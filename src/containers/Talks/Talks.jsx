import React from 'react';

import './Talks.scss';
import { Card } from '../../components/Card';
import { talksPreset } from '../../constants/talksConstants';

const Talks = () => {
  return (
    <div className='talks-container'>
      <h1>My talks over the years</h1>
      {talksPreset.map(talk => {
        return (
          <Card
            year={talk.year}
            title={talk.title}
            photo={talk.photo}
            link={talk.link}
            slides={talk.slides}
          />
        )
      })}
    </div>  
  )
}

export default Talks;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Talks.scss';
import { Card } from '../../components/Card';

const Talks = () => {
  let talksList = [];
  const [talks, setTalks] = useState([])

  useEffect(() => {
    axios
      .get('https://nonprod-website.firebaseio.com/talks.json')
      .then((response) => {
        transformTalks(response.data)
        setTalks(talksList);
      })
  }, [])

  const transformTalks = (talksPreset) => {
    Object.keys(talksPreset).forEach((talkKey) => {
      return talksList.push(talksPreset[talkKey])
    });
  }

  return (
    <div className='talks-container'>
      <h1>My talks over the years</h1>
      {talks.map((talk, index) => {
        return (
          <Card
            key={index}
            year={talk.year}
            title={talk.title}
            photo={talk.imageUrl}
            link={talk.link}
            slides={talk.slides}
          />
        )
      })}
    </div>
  )
};

export default Talks;

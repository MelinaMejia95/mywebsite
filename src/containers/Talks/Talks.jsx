import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Talks.scss';
import { Card } from '../../components/Card';
import { SectionList } from '../../components/SectionList';

const Talks = () => {
  let transformedTalks = [];
  let orderedTalks = {}
  const [talks, setTalks] = useState([])

  useEffect(() => {
    axios
      .get('https://nonprod-website.firebaseio.com/talks.json')
      .then((response) => {
        transformTalks(response.data);
        groupTalks(transformedTalks)
        setTalks(orderedTalks);
      });
  }, [])

  const transformTalks = (talksPreset) => {
    Object.keys(talksPreset).forEach((talkKey) => {
      return transformedTalks.push(talksPreset[talkKey]);
    });
  }

  const getTalksYears = (talks) => {
    const years = []
    Object.keys(talks).forEach(key => {
      const year = years.find(year => talks[key].year === year)
      if(!year) {
        years.push(talks[key].year)
      }
    })
    return years
  }

  const groupTalks = (talks) => {
    const years = getTalksYears(talks)
    years.forEach(year => {
      const yearTalk = []
      talks.forEach(talk => {
        if(year === talk.year) {
          yearTalk.push(talk)
        }
        orderedTalks[year] = yearTalk
      })
    })
  }

  return (
    <div className='talks-container'>
      <h1>My talks over the years</h1>
      {
        Object.keys(talks).map((key, index) => {
          return (
            <SectionList
              key={index}
              title={key}
              items={talks[key]}
            />
          )
        })
      }
    </div>
  )
};

export default Talks;

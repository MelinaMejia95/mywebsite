import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Talks.module.scss'
import { Loader } from '../../components/Loader'
import { SectionList } from '../../components/SectionList'

const Talks = () => {
  let transformedTalks = []
  let orderedTalks = {}
  const [talks, setTalks] = useState([])
  const [loaderVisibility, setLoaderVisibility] = useState(true)

  useEffect(() => {
    axios
      .get('https://nonprod-website.firebaseio.com/talks.json')
      .then((response) => {
        transformTalks(response.data)
        groupTalks(transformedTalks)
        setTalks(orderedTalks)
        setLoaderVisibility(false)
      })
  }, [])

  const transformTalks = (talksPreset) => {
    Object.keys(talksPreset).forEach((talkKey) => {
      return transformedTalks.push(talksPreset[talkKey])
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
    <div className={styles.talksContainer}>
      <h1>My talks over the years</h1>
      {loaderVisibility ?
        <Loader
          type="Puff"
          color="#FFF"
        />
        :
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

export default Talks

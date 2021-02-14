import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Talks.module.scss'
import { Loader } from '../../components/Loader'
import { SectionList } from '../../components/SectionList'
import { talksPreset } from '../../constants/talksConstans'


const Talks = () => {
  const { t } = useTranslation()
  let orderedTalks = {}
  const [talks, setTalks] = useState([])
  const [loaderVisibility, setLoaderVisibility] = useState(true)

  useEffect(() => {
    groupTalks(talksPreset)
    setTalks(orderedTalks)
    /* eslint-disable */
    setTimeout(() => {
      setLoaderVisibility(false)
    }, 2000)
  }, [])

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
      <h1>{t('talksTitle')}</h1>
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

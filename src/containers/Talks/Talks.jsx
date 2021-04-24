import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Talks.module.scss'
import { Loader } from '../../components/Loader'
import { Card } from '../../components/Card'
import { talksPreset } from '../../constants/talksConstans'


const Talks = () => {
  const { t } = useTranslation()
  const [loaderVisibility, setLoaderVisibility] = useState(true)

  useEffect(() => {
    /* eslint-disable */
    setTimeout(() => {
      setLoaderVisibility(false)
    }, 2000)
  }, [])

  return (
    <div className={styles.talksContainer}>
      <h1>{t('talksTitle')}</h1>
      {loaderVisibility ?
        <Loader
          type="Puff"
          color="#FFF"
        />
        :
        <div className={styles.cardsContainer}>
          {talksPreset.map((talk, index) => {
            return (
              <Card
                key={index}
                title={talk.title}
                photo={talk.imgSource}
                link={talk.link}
              />
            )
          })}
        </div>
      }
    </div>
  )
};

export default Talks

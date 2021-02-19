import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import styles from './Art.module.scss'
import { Loader } from '../../components/Loader'
import { artPreset } from '../../constants/artConstanst'

const Art = () => {
  const { t } = useTranslation()
  const [loaderVisibility, setLoaderVisibility] = useState(true)

  useEffect(() => {
    /* eslint-disable */
    setTimeout(() => {
      setLoaderVisibility(false)
    }, 1000)
  }, [])

  return (
    <div className={styles.artContainer}>
      <h1>{t('artTitle')}</h1>
      <p>{t('artDescription')}</p>
      {loaderVisibility ? (
        <Loader type='Puff' color='#FFF' />
      ) : (
        <Carousel>
          {artPreset.map((img, index) => {
            return (
              <div key={index}>
                <img src={img.source} alt={img.caption} />
              </div>
            )
          })}
        </Carousel>
      )}
    </div>
  )
}

export default Art

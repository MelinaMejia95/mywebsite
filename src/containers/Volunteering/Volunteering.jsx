import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Volunteering.module.scss'
import { CustomCard } from '../../components/Card'
import { volunteeringPreset } from '../../constants/volunteeringConstants'

const Volunteering = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.volunteeringContainer}>
      <h1>{t('volunteeringTitle')}</h1>
      <p>{t('volunteeringDescription')}</p>
      <div className={styles.cardsContainer}>
        {volunteeringPreset.map((item, index) => {
          return (
            <>
              <CustomCard
                imgSource={item.imgSource}
                title={item.title}
                description={item.description}
              />
              <div className={styles.verticalLine}></div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Volunteering

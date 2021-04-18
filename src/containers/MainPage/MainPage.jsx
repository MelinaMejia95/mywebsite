import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'
import photo from '../../assets/images/Me.png'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.mainPageContainer}>
      <section className={styles.introductionContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <h3 className={styles.subtitle}>{t('subtitle')}</h3>
      </section>
      <section className={styles.imageContainer}>
        <img src={photo} alt="Melina's photo" />
      </section>
      <section className={styles.presentationContainer}>
        <p>{t('introduction')}</p>
      </section>
    </div>
  )
}

export default MainPage

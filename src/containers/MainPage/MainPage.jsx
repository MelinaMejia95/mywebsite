import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'
import photo from '../../assets/images/Me.png'
import korean from '../../assets/images/korean.png'
import spanish from '../../assets/images/spanish.png'
import english from '../../assets/images/english.png'
import { skillsPreset } from '../../constants/skillsContants'
import { languagesPreset } from '../../constants/languagesConstants'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.mainPageContainer}>
      <section className={styles.introductionContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <h3 className={styles.subtitle}>{t('subtitle')}</h3>
      </section>
      <section className={styles.presentationContainer}>
        <img src={photo} alt="Melina's photo" />
        <p>{t('introduction')}</p>
      </section>
      <section className={styles.skillsContainer}>
        <h3>{t('skillsTitle')}</h3>
        <div className={styles.skillsContent}>
          {skillsPreset.map((skill, index) => {
            return (
              <div className={styles.skillCardsContainer} key={index}>
                <span>{skill.title}</span>
                <div className={styles.skillCard}>
                  <img src={skill.photo} alt={skill.title} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.languagesContainer}>
        <h3>{t('languagesTitle')}</h3>
        <p>{t('languagesDescription')}</p>
        <div className={styles.languagesCard} id='spanish'>
          <img src={spanish} alt={`Meli's cat speaking spanish`} />
          <div className={styles.languageDescription}>
            <h4>{t('spanish')}</h4>
            <label>{t('spanishLevel')}</label>
          </div>
        </div>
        <div className={styles.languagesCard} id='english'>
          <img src={english} alt={`Meli's cat speaking english`} />
          <div className={styles.languageDescription}>
            <h4>{t('english')}</h4>
            <label>{t('englishLevel')}</label>
          </div>
        </div>
        <div className={styles.clearfix}></div>
        <div className={styles.languagesCard} id='korean'>
          <img src={korean} alt={`Meli's cat speaking korean`} />
          <div className={styles.languageDescription}>
            <h4>{t('korean')}</h4>
            <label>{t('koreanLevel')}</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage

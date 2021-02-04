import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './MainPage.module.scss'
import photo from '../../assets/images/Me.png'
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
        {languagesPreset.map((language, index) => {
          return (
            <>
              <div
                className={styles.languagesCard}
                id={language.title}
                key={index}
              >
                <img src={language.photo} alt={language.photoAlt} />
                <div className={styles.languageDescription}>
                  <h4>{language.title}</h4>
                  <label>{language.level}</label>
                </div>
              </div>
              {language.title === 'english' && (
                <div className={styles.clearfix}></div>
              )}
            </>
          )
        })}
      </section>
    </div>
  )
}

export default MainPage

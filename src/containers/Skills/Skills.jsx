import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Skills.module.scss'
import korean from '../../assets/images/korean.png'
import spanish from '../../assets/images/spanish.png'
import english from '../../assets/images/english.png'
import { skillsPreset } from '../../constants/skillsContants'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.skillsContainer}> 
      <h1>Skills</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.techSkills}>
          <label>Tech</label>
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
        </div>
        <div className={styles.languageSkills}>
          <label>{t('languagesTitle')}</label>
          <div className={styles.languagesCard} id='spanish'>
            <img src={spanish} alt={`Meli's cat speaking spanish`} />
            <div className={styles.languageDescription}>
              <h4>{t('spanish')}</h4>
              <span>{t('spanishLevel')}</span>
            </div>
          </div>
          <div className={styles.languagesCard} id='english'>
            <img src={english} alt={`Meli's cat speaking english`} />
            <div className={styles.languageDescription}>
              <h4>{t('english')}</h4>
              <span>{t('englishLevel')}</span>
            </div>
          </div>
          <div className={styles.clearfix}></div>
          <div className={styles.languagesCard} id='korean'>
            <img src={korean} alt={`Meli's cat speaking korean`} />
            <div className={styles.languageDescription}>
              <h4>{t('korean')}</h4>
              <span>{t('koreanLevel')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

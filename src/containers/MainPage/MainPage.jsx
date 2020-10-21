import React from 'react'

import { skillsPreset } from '../../constants/skillsContants'
import { languagesPreset } from '../../constants/languagesConstants'
import photo from '../../assets/images/me.PNG'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <section className={styles.introductionContainer}>
        <h1 className={styles.title}>I'm Melina</h1>
        <h3 className={styles.subtitle}>Nice to meet you</h3>
      </section>
      <section className={styles.presentationContainer}>
        <img src={photo} alt="Melina's photo" />
        <p>
          I'm a front-end developer from Medellín-Colombia 🇨🇴 <br />I have a
          huge passion about programming, web accesibility, drawing and learning
          languages.
        </p>
      </section>
      <section className={styles.skillsContainer}>
        <h3>My skills</h3>
        <div className={styles.skillsContent}>
          {skillsPreset.map((skill, index) => {
            return (
              <div className={styles.skillCardsContainer} key={index}>
                <span>{skill.title}</span>
                <div className={styles.skillCard}>
                  <img src={skill.photo} alt={skill.title}/>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.languagesContainer}>
        <h3>Languages</h3>
        <p>
          Those are the languages I speak and/or I'm learning
        </p>
        {languagesPreset.map((language, index) => {
          return (
            <>
              <div className={styles.languagesCard} id={language.title} key={index}>
                <img src={language.photo} alt={language.photoAlt}/>
                <div className={styles.languageDescription}>
                  <h4>{language.title}</h4>
                  <label>{language.level}</label>
                </div>
                <div className={styles.dotsContainer}>
                  <span className={styles.littleDot}></span>
                  <span className={styles.littleDot}></span>
                  <span className={styles.littleDot}></span>
                  <span className={styles.littleDot}></span>
                  <span className={styles.littleDot}></span>
                </div>
              </div>
              {language.title === 'english' && <div className={styles.clearfix}></div>}
            </>
          )
        })}
      </section>
    </div>
  )
}

export default MainPage

import React from 'react'

import { Header } from '../../components/Header';
import { PercentageCircle } from '../../components/PercentageCircle';
import { Footer } from '../../components/Footer';
import { skillsPreset } from '../../constants/skillsContants';
import './MainPage.scss';

const MainPage = () => {
  return (
    <>
      <div className='maingpage-container'>
        <section className='introduction-container'>
          <Header />
          <div>
            <h1 htmlFor=''>I'm Melina!</h1>
            <h3>Nice to meet you</h3>
          </div>
        </section>
        <section className='presentation-container'>
          <h3>Hello</h3>
          <p>
            I'm a front-end developer from Medellín-Colombia 🇨🇴 <br />I have a
            huge passion about programming, web accesibility, drawing and
            learning languages.
          </p>
        </section>
        <section className='skills-container'>
          <h3>My skills</h3>
          <div className='spinners-container'>
            {skillsPreset.map((skill) => {
              return (
                <PercentageCircle
                  title={skill.title}
                  percentage={skill.percentage}
                />
              )
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default MainPage

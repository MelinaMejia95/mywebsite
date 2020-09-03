import React from 'react';

import { PercentageCircle } from '../../components/PercentageCircle';
import { skillsPreset } from '../../constants/skillsContants';
import photo from '../../assets/images/me.png';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='maingpage-container'>
      <section className='introduction-container'>
        <h1>I'm Melina!</h1>
        <h3>Nice to meet you</h3>
      </section>
      <section className='presentation-container'>
        <img src={photo} alt="Melina's photo" />
        <p>
          I'm a front-end developer from Medellín-Colombia 🇨🇴 <br />I have a
          huge passion about programming, web accesibility, drawing and learning
          languages.
        </p>
      </section>
      <section className='skills-container'>
        <h3>My skills</h3>
        <div className='spinners-container'>
          {skillsPreset.map((skill, index) => {
            return (
              <PercentageCircle
                key={index}
                title={skill.title}
                percentage={skill.percentage}
              />
            )
          })}
        </div>
      </section>
      <section className='languages-container'>
        <h3>Languages</h3>
        <p>
          Those are the languages I speak and/or I'm learning
        </p>
        <div className='languages-card'>
          <img src={photo} alt='Melina first language'/>
          <div className='language-description'>
            <h4>Spanish</h4>
            <label>Native</label>
          </div>
        </div>
        <div className='languages-card' id='english'>
          <div className='language-description'>
            <h4>English</h4>
            <label>Level C1</label>
          </div>
          <img src={photo} alt='Melina first language'/>
        </div>
        <div class="clearfix"></div>
        <div className='languages-card'>
          <img src={photo} alt='Melina first language'/>
          <div className='language-description'>
            <h4>Korean</h4>
            <label>Learning!</label>
          </div>
        </div>
      </section>
    </div>
  )
};

export default MainPage;

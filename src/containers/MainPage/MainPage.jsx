import React from 'react';

import { PercentageCircle } from '../../components/PercentageCircle';
import { skillsPreset } from '../../constants/skillsContants';
import { languagesPreset } from '../../constants/languagesConstants';
import photo from '../../assets/images/me.PNG';
import message from '../../assets/images/message.PNG';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='maingpage-container'>
      <section className='introduction-container'>
        <img src={message} alt="I'm Melina" />
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
        {languagesPreset.map((language, index) => {
          return (
            <>
              <div className='languages-card' id={language.title}>
                <img src={language.photo} alt={language.photoAlt}/>
                <div className='language-description'>
                  <h4>{language.title}</h4>
                  <label>{language.level}</label>
                </div>
              </div>
              {language.title === 'english' && <div class="clearfix"></div>}
            </>
          )
        })}
      </section>
    </div>
  )
};

export default MainPage;

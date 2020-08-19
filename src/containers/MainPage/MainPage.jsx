import React from 'react';

import { Header } from '../../components/Header';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="maingpage-container">
      <section className="introduction-container">
        <Header />
        <div>
          <h1 htmlFor="">I'm Melina!</h1>
          <h3>Nice to meet you</h3>
        </div>
      </section>
      <section className="presentation-container">
        <h3>Hello</h3>
        <p>
          I'm a front-end developer from Medellín-Colombia 🇨🇴 <br />
          I have a huge passion about programming, web accesibility,
          drawing and learning languages.
        </p>
      </section>
      <section className="skills-container">
        <h3>My skills</h3>
        <div className="percentage-container">
          <label htmlFor="">HTML</label>
          <div className="wrapper">
            <span>60%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage;
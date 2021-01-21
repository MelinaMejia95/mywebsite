import React from 'react'

import styles from './Volunteering.module.scss'
import { CustomCard } from '../../components/Card'
import { volunteeringPreset } from '../../constants/volunteeringConstants'

const Volunteering = () => {
  return (
    <div className={styles.volunteeringContainer}>
      <h1>Volunteering Experience</h1>
      <p>
        Tech communities have had a huge impact on my life and my professional
        career, I've met incredible people and made amazing friends. <br />I
        love having the opportunity to share my knowledge and change other
        people's lives through code!
      </p>
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

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import styles from './Art.module.scss'
import { Loader } from '../../components/Loader'
import { artPreset } from '../../constants/artConstanst'

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Art = () => {
  const { t } = useTranslation()
  const size = useWindowSize()
  const initialOptions = {
    rewind : true,
    perPage: 3,
    perMove: 1,
    gap: '1rem',
  }
  const [loaderVisibility, setLoaderVisibility] = useState(true)
  const [splideOptions, setSplideOptions] = useState(initialOptions)

  useEffect(() => {
    /* eslint-disable */
    setTimeout(() => {
      setLoaderVisibility(false)
    }, 1000)
  }, [])

  useEffect(() => {
    setSplideOptions({
      ...initialOptions,
      perPage: size.width > 750 ? 3 : 1
    })
  }, [size.width])

  return (
    <div className={styles.artContainer}>
      <h1>{t('artTitle')}</h1>
      <p>{t('artDescription')}</p>
      {loaderVisibility ? 
        <Loader type='Puff' color='#FFF' />
        : (
            <div className={styles.carouselContainer}>
              <Splide
                options={splideOptions}
                className={styles.carousel}
              >
                {artPreset.map((img, index) => {
                    return (
                      <SplideSlide key={index}>
                        <img className={styles.carouselImg} src={img.source} alt={img.caption}/>
                      </SplideSlide>
                  )
                })}
              </Splide>
            </div>
         )
      }
    </div>
  )
}

export default Art

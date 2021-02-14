import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import Carousel, { Modal, ModalGateway } from 'react-images'

import styles from './Art.module.scss'
import { customStyles } from './carouselStyles'
import { Loader } from '../../components/Loader'

const navButtonStyles = (base) => ({
  ...base,
  ...customStyles.navButtonStyles,
})

const Art = () => {
  const { t } = useTranslation()
  let imgUrlsList = []
  const [urls, setUrls] = useState([])
  const [selectedIndex, setSelectedIndex] = useState('')
  const [loaderVisibility, setLoaderVisibility] = useState(true)
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    axios
      .get('https://nonprod-website.firebaseio.com/art.json')
      .then((response) => {
        renderPhotos(response.data)
        setUrls(imgUrlsList)
        setLoaderVisibility(false)
      })
  }, [])

  const renderPhotos = (photosList) => {
    Object.keys(photosList).forEach((key) => {
      imgUrlsList.push({ source: photosList[key] })
    })
  }

  const handleImgClick = (index) => {
    setModalVisibility(true)
    setSelectedIndex(index)
  }

  return (
    <div className={styles.artContainer}>
      <h1>{t('artTitle')}</h1>
      <p>{t('artDescription')}</p>
      {loaderVisibility ? (
        <Loader type='Puff' color='#FFF' />
      ) : (
        <div className={styles.photosGridContainer}>
          {urls.map((img, index) => {
            return (
              <div onClick={() => handleImgClick(index)} key={index}>
                <img src={img.source} alt={`Melina's drawing`} />
              </div>
            )
          })}
        </div>
      )}
      <ModalGateway>
        {modalVisibility && (
          <Modal onClose={() => setModalVisibility(false)}>
            <Carousel
              currentIndex={selectedIndex}
              views={urls}
              components={{ Footer: null }}
              styles={{
                container: (base) => ({
                  ...base,
                  ...customStyles.container,
                }),
                view: (base) => ({
                  ...base,
                  ...customStyles.view,
                }),
                navigationPrev: navButtonStyles,
                navigationNext: navButtonStyles,
              }}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

export default Art

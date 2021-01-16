import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel, { Modal, ModalGateway } from 'react-images'

import styles from './Art.module.scss'
import { Loader } from '../../components/Loader'
import { customStyles } from './carouselStyles'

const navButtonStyles = (base) => ({
  ...base,
  ...customStyles.navButtonStyles
})

const Art = () => {
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
    console.log(photosList)
    return Object.keys(photosList).forEach((key) => {
      return imgUrlsList.push({ source: photosList[key] })
    })
  }

  const handleImgClick = (index) => {
    setModalVisibility(true)
    setSelectedIndex(index)
  }

  return (
    <div className={styles.artContainer}>
      <h1>My Art</h1>
      <p>
        Drawing is my biggest passion since I have memory! Those are some of my
        favorite ones
      </p>
      {loaderVisibility ? (
        <Loader type='Puff' color='#FFF' />
      ) : (
        <div className={styles.photosGridContainer}>
          {urls.map((url, index) => {
            return (
              <div onClick={() => handleImgClick(index)} key={index}>
                <img src={url.source} alt={`Photo ${index}`} />
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
                  ...customStyles.container
                }),
                view: (base) => ({
                  ...base,
                  ...customStyles.view
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

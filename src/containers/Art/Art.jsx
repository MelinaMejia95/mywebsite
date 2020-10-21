import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Art.module.scss'

const Art = () => {
  let imgUrlsList = []
  const [urls, setUrls] = useState([])

  useEffect(() => {
    axios
      .get('https://nonprod-website.firebaseio.com/art.json')
      .then((response) => {
        renderPhotos(response.data)
        setUrls(imgUrlsList)
      })
  }, [])

  const renderPhotos = (photosList) => {
    return Object.keys(photosList).forEach((key) => {
      return imgUrlsList.push(photosList[key])
    })
  }

  return (
    <div className={styles.artContainer}>
      <h1>My Art</h1>
      <p>
        Drawing is my biggest passion since I have memory!
        Those are some of my favorite ones
      </p>
      <div className={styles.photosGridContainer}>
        {urls.map((url, index) => {
          return <img src={url} alt={`Photo ${index}`}/>
        })}
      </div>
    </div>
  )
}

export default Art

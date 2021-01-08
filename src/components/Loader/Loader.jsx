import React from 'react'
import  Loader  from 'react-loader-spinner'

import './Loader.scss'

const LoaderSpinner = ({
  color,
  type
}) => {

  return (
    <div className='loaderContainer'>
      <Loader
        type={type}
        color={color}
        height={100}
        width={100}
      />
    </div>
  )
};

export default LoaderSpinner

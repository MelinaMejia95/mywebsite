import React from 'react'
import i18next from 'i18next'

const Dropdown = () => {

  const changeLanguage = (language) => {
    i18next.changeLanguage(language)
  }

  return (
    <select name="languages" id="languages" onChangeCapture={(e) => changeLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="kr">KR</option>
    </select>
  )
}

export default Dropdown

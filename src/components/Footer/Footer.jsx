import React from 'react'
import { useTranslation } from 'react-i18next'

import './Footer.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <label>{t('footerTitle')}</label>
      <label>© 2021 Melina Mejía</label>
    </footer>
  )
}

export default Footer

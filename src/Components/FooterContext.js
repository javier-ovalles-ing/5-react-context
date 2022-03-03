import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext'


const Footer = () => {

  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);
  return (
    <div>
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  )
}

export default Footer;
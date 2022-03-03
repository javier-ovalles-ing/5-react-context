import React from 'react'

const Footer = ({theme,texts}) => {
  return (
    <div>
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  )
}

export default Footer
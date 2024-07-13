import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrap">
        <p className="footer__copy">Copyright 2024 @AGAINST</p>
        <p className="footer__text">Developer: Elena Lenivtseva</p>
        <p className="footer__contact"> 
          <a className="footer__contactLink" href="mailto:lenivtseva.lena@yandex.ru">Contact me lenivtseva.lena@yandex.ru</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

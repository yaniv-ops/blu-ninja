import localFont from "next/font/local";
import styles from './intro-page.module.css'
import React from 'react'


const robotoMedium = localFont({
  src: "../../app/fonts/robotoMedium.ttf",
  variable: "--font-roboto-medium",
  weight: "600"
});


const IntroPage = () => {
  
return (

  <div className={`${styles.intro_main} ${robotoMedium.variable}`}>
    <div className={styles.border}></div>
    <div className={styles['logo-container']}>
      <h1 className={styles.popular}><span>P</span>OPULAR</h1>
      <h1 className={styles.iconic}>IC<span>O</span>NIC</h1>
      <h1 className={styles.popular}>E<span>L</span>EGANT</h1>
      <h1 className={styles.iconic}>STYL<span>I</span>SH</h1>
    </div>
  </div>
  )
}

export default IntroPage
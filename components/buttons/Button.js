import styles from './button.module.css'
import React from 'react'

const Button = () => {
  return (
   
    <button className={styles["scale-button"]}>
        <span className={styles["scale-text"]}>בקרוב...</span>
        <span className={styles["scale-bg"]}></span>
    </button>
    
  )
}

export default Button
import styles from './elegant-btn.module.css'
import React from 'react'

const ElegantBtn = () => {
  return (
    <div className={styles['button-wrapper']}>
        <button className={styles['slide-button']}>
          <span className={styles['slide-content']}>
          <span className={`${styles.text} dark:text-white`}>...בקרוב מאוד</span>
              <span className={styles.icon}>
                  <i className={`${styles.fas}`}></i>
              </span>
          </span>
      </button>
    </div>
  )
}

export default ElegantBtn
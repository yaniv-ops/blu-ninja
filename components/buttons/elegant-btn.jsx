import styles from './elegant-btn.module.css'
import React from 'react'

const ElegantBtn = ({name}) => {
  return (
    <div className={styles['button-wrapper']}>
        <button className={styles['slide-button']}>
          <span className={styles['slide-content']}>
          <span className={`${styles.text} dark:text-white`}>{name}</span>
              <span className={styles.icon}>
                  <i className={`${styles.fas}`}></i>
              </span>
          </span>
      </button>
    </div>
  )
}

export default ElegantBtn
import React from 'react'
import styles from './ticker.module.css';


function TickerItem({children}) {
  
    return (
    <div className={styles.ticker_item}>
        {children}
    </div>
  )
}

export default TickerItem
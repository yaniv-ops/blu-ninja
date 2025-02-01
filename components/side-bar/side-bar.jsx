'use client'
import { useState } from 'react'
import Hamburger from '../hamburger'
import styles from './side-bar.module.css'
import React from 'react'


const SideBar = ({children}) => {
    
    const [hamStatus, setHamStatus] = useState(false)
  
  
    function toggleHamburger() {
        setHamStatus(lastStatus=>!lastStatus)
    }

    return (
    <div onClick={toggleHamburger}>
        <div className={`${styles.side_bar} ${hamStatus && styles.is_open}`}>
            <div className={styles.side_bar_menu}>
                {children}
            </div>
        </div>
        <Hamburger isActive={hamStatus} />
    </div>
  )
}

export default SideBar
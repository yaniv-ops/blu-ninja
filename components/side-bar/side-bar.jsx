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
        <div className={`${styles.side_bar} ${hamStatus && styles.is_open} background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%) dark:text-white bg-white dark:bg-black text-black dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}>
            <div className={styles.side_bar_menu}>
                {children}
            </div>
        </div>
        <Hamburger isActive={hamStatus} />
    </div>
  )
}

export default SideBar
import {names} from './names.js'
import classes from './ticker.module.css'
import React from 'react'

const Ticker = () => {
  return (
    
    <div className={classes.ticker_wrapper}>
        <div className={classes.ticker}>
            <div className={classes.ticker_item}>
                <img src={`/Logo.png`} alt='person'  className={classes.image} />
                <span>בלו-נינג&#39;ה ועם ישראל מברכים את :</span>
            </div>
            {names.map((name,index)=>{
            return <div className={classes.ticker_item} key={index}>
                <span>{name.name}</span>
                <img src={`/${name.image}`} alt='person'  className={classes.image} />
            </div>
            })}
            <div className={classes.ticker_item}>
                טוב שבאתם הביתה
            </div>
            <div className={classes.ticker_item}>
                !!!
            </div>
        </div>
    </div>
  )
}

export default Ticker 
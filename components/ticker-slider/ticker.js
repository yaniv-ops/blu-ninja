import {fetchWeather} from '@/components/weather'
import TickerItem from './ticker-item'
import classes from './ticker.module.css'
import React from 'react'

const Ticker = async () => {
  
    const result = await fetchWeather()
    const forecast = result.forecast
  
    return (
    
    <div className={classes.ticker_wrapper}>
        <div className={classes.ticker}>
            <TickerItem>
                <img src={`/Logo.png`} alt='person'  className={classes.image} />
                <span>התחזית המעודכנת לתאריך : </span>
                <span className={classes.date}> {result.date} </span>
            </TickerItem>
            <TickerItem>
                <span>לשעה : </span>
                <span className={classes.date}> {result.hour} </span>
            </TickerItem>
            {forecast.map((name,index)=>{
            return <TickerItem key={index}>
                <span>{name.city} : </span>
                <span>{name.temperature}</span>
            </TickerItem>
            })}
        </div>
    </div>
  )
}

export default Ticker 
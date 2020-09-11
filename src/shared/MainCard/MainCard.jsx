import React from 'react'
import './MainCard.css'
import {config} from "../config/config"

const MainCard = ({switcher, btn, obj = {}, animate}) => {
    const {
        name,
        Temperature,
        TemperatureMin,
        TemperatureMax,
        description,
        capital
    } = obj;
    const {imgArr} = config
    const checkNight = new Date().getHours()
    // console.log(checkNight)
    const {img} = imgArr.find(({dec, at, from}) =>
        ((checkNight >= at || checkNight <= from) && dec === description) || dec === description) || {img: ''}

    return(
            <div className={"slider-card " + switcher + " " + animate}>
                <h3 className="card-city">{name}, {capital}</h3>
                <img className="card-icon" src={img} alt="#"/>
                <div className="card-weather">
                    <h2 className='card-temperature'>{Temperature}</h2>
                    <span className={"card-weather-title"}>{description}</span>
                </div>
                <div className="card-minmax">
                    <span className='card-min'>{TemperatureMin}</span>
                    <span className='card-max'>{TemperatureMax}</span>
                </div>
                {btn}
            </div>
    )
}

export default MainCard
